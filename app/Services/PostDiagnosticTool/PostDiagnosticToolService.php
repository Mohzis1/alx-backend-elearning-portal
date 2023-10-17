<?php

namespace App\Services\PostDiagnosticTool;

use App\Models\PostDiagnosticTool\PostDiagnosticAnswer;
use App\Models\PostDiagnosticTool\PostDiagnosticHiddenQuestion;
use App\Models\PostDiagnosticTool\PostDiagnosticOption;
use App\Models\PostDiagnosticTool\PostDiagnosticQuestion;
use App\Models\PostDiagnosticTool\PostDiagnosticUser;
use App\Services\Location\CountryService;
use App\Services\User\UserService;

class PostDiagnosticToolService
{
    protected UserService $user;
    protected CountryService $country;
    public function __construct(UserService $user, CountryService $country){
        $this->user = $user;
        $this->country = $country;
    }

    public function question(): PostDiagnosticQuestion
    {
        return new PostDiagnosticQuestion();
    }

    public function questionWithRelationships(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->question()->with('category', 'options');
    }

    public function option(): PostDiagnosticOption
    {
        return new PostDiagnosticOption();
    }

    public function optionWithRelationships(){
        return $this->option()->with('category', 'question');
    }

    public function answer(){
        return new PostDiagnosticAnswer();
    }

    public function answerWithRelationships(){
        return $this->question()->with('user', 'post_diagnostic_user', 'question');
    }

    public function postDiagnosticUser(){
        return new PostDiagnosticUser();
    }

    public function postDiagnosticUserWithRelationships(){
        return $this->question()->with('user', 'answers', 'last_question');
    }

    public function hiddenQuestion(){
        return PostDiagnosticHiddenQuestion::with('user');
    }

    public function answeredQuestionsId($userId){
       return $this->answer()->select('post_diagnostic_question_id')
            ->where('user_id', $userId)->get()->toArray();
    }

    public function getQuestion($userId){
        // get answered question id from answers
        $answeredQuestionsId = $this->answeredQuestionsId($userId);

        // Get stored hidden questions for this user
        $getHiddenQuestions = $this->hiddenQuestion()
            ->where('user_id', $userId)->first();
        $hiddenQuestions = '';

        // If there are hidden questions, convert them (string) to array
        if($getHiddenQuestions){
            $hiddenQuestions = explode(',', $getHiddenQuestions->questions);
        }

        // get single question using following commands
        return $this->question()->orderBy('sort')
            ->with('category', function ($query) {
                $query->orderBy('sort', 'asc');
            })->with('options', static function ($query){
                $query->orderBy('sort', 'asc');
            })->when(count($answeredQuestionsId) > 0, function ($query) use ($answeredQuestionsId) {
                $query->whereNotIn('id', $answeredQuestionsId);
            })->when($getHiddenQuestions, function ($query) use ($hiddenQuestions) {
                $query->whereNotIn('id', $hiddenQuestions);
            })->first();
    }

    public function getProgressPercentage($userId){
        // get answered question id from answers
        $answeredQuestionsId = $this->answeredQuestionsId($userId);

        // Get stored hidden questions for this user
        $getHiddenQuestions = $this->hiddenQuestion()
            ->where('user_id', $userId)->first();

        // If there are hidden questions, convert them (string) to array
        $hiddenQuestions = '';
        if($getHiddenQuestions){
            $hiddenQuestions = explode(',', $getHiddenQuestions->questions);
        }

        // get single question using following commands
        $questions = $this->question()->orderBy('sort')
            ->with('category', function ($query) {
                $query->orderBy('sort', 'asc');
            })->with('options', static function ($query){
                $query->orderBy('sort', 'asc');
            })->when($getHiddenQuestions, function ($query) use ($hiddenQuestions) {
                $query->whereNotIn('id', $hiddenQuestions);
            })->get();

        return round((count($answeredQuestionsId) / $questions->count()) * 100);
    }

    public function checkDiagnosticUser($userId, $currentQuestion){
        $user = $this->postDiagnosticUser()->where('user_id', $userId)->first();
        if(!$user){
            $user = $this->postDiagnosticUser()->create([
                'user_id' => $userId,
                'last_question_id' => $currentQuestion,
            ]);
        }else{
            $user->last_question_id = $currentQuestion;
            $user->save();
        }
        return $user;
    }

    public function storeAnswerFromQuestionId($request, $questionId, $userId){

        $diagnosticUser = $this->checkDiagnosticUser($userId, $questionId);
        $question = $this->questionWithRelationships()->findOrFail($questionId);

//        $user = $this->user->braceUser()->with('post_diagnostic_user')->findOrFail($userId);

        //If question type is radio, get option value and point from id
        // that was passed from the form
        if($question->type === 'radio') {
            $option = $this->option()->findOrFail($request->option_id);
            $this->answer()->create([
                'user_id' => $userId,
                'post_diagnostic_user_id' => $diagnosticUser->id,
                'post_diagnostic_question_id' => $question->id,
                'post_diagnostic_question_category_id' => $question->post_diagnostic_question_category_id,
                // If option is conditional, add it's option_id and conditional answer, else add only option_id
                'answer' => $option->conditional ? $option->option .' - '.$request->answer : $option->option
            ]);

            // if question is conditional
            // check if user has other conditional questions
            // if they don't create a new hidden question for the user
            // else concatinate the new hidden questions to the user
            if (!empty($option->hide_questions)) {
                $hasHiddenQuestions = $this->hiddenQuestion()->where('user_id', $userId)->first();

                if (!$hasHiddenQuestions) {
                    $this->hiddenQuestion()->create([
                        'user_id' => $userId,
                        'post_diagnostic_user_id' => $userId,
                        'questions' => $option->hide_questions,
                    ]);
                } else {
                    $hasHiddenQuestions->questions .= ',' . $option->hide_questions;
                    $hasHiddenQuestions->save();
                }
            }

        }elseif($question->type === 'location_country') {
            $option = $this->country->worldCountryAfrica()->findOrFail($request->option_id)->name;
            $this->answer()->create([
                'user_id' => $userId,
                'post_diagnostic_user_id' => $diagnosticUser->id,
                'post_diagnostic_question_id' => $question->id,
                'post_diagnostic_question_category_id' => $question->post_diagnostic_question_category_id,
                'answer' => $option,
            ]);

            // if question is conditional
            // check if user has other conditional questions
            // if they don't create a new hidden question for the user
            // else concatenate the new hidden questions to the user
            if($question->conditional === 1){
                $hasCondition = $this->hiddenQuestion()->where('user_id', $userId)->first();

                if(!$hasCondition){
                    $this->hiddenQuestion()->create([
                        'user_id' => $userId,
                        'post_diagnostic_user_id' => $diagnosticUser->id,
                        'questions' => $option->hide_questions,
                    ]);
                }else{
                    $hasCondition->questions .= ',' . $option->hide_questions;
                    $hasCondition->save();
                }
            }

        }elseif($question->type === 'location_state') {
            // get country id and option id from request
            // Then get state name from that country
            $option = $this->country->worldStateAfrica($request->country_id)->findOrFail($request->option_id)->name;
            $this->answer()->create([
                'user_id' => $userId,
                'post_diagnostic_user_id' => $diagnosticUser->id,
                'post_diagnostic_question_id' => $question->id,
                'post_diagnostic_question_category_id' => $question->post_diagnostic_question_category_id,
                'answer' => $option,
            ]);

            // if question is conditional
            // check if user has other conditional questions
            // if they don't create a new hidden question for the user
            // else concatinate the new hidden questions to the user
            if($question->conditional === 1){
                $hasCondition = $this->hiddenQuestion()->where('user_id', $userId)->first();
                if(!$hasCondition){
                    $this->hiddenQuestion()->create([
                        'user_id' => $userId,
                        'post_diagnostic_user_id' => $userId,
                        'questions' => $option->hide_questions,
                    ]);
                }else{
                    $hasCondition->questions .= ',' . $option->hide_questions;
                    $hasCondition->save();
                }
            }

            // if question type is a checkbox, get array of ids from form
            // Iterate them and get their points and option from options table
            // add options to array and store as a string in answers table
        }elseif($question->type === 'checkbox'){
            $selectedOptionsArray = [];
            foreach($request->option_ids as $key => $value){
                $selectedOptionsArray[] = $this->option()->findOrFail($value)->option;
            }
            $this->answer()->create([
                'user_id' => $userId,
                'post_diagnostic_user_id' => $diagnosticUser->id,
                'post_diagnostic_question_id' => $questionId,
                'post_diagnostic_question_category_id' => $question->post_diagnostic_question_category_id,
                'answer' => implode(", ", $selectedOptionsArray),
            ]);
        }else{
            $this->answer()->create([
                'user_id' => $userId,
                'post_diagnostic_user_id' => $diagnosticUser->id,
                'post_diagnostic_question_id' => $questionId,
                'post_diagnostic_question_category_id' => $question->post_diagnostic_question_category_id,
                'answer' => $request->answer,
            ]);
        }

        // Update user status
        $this->updateDiagnosticUserStatus($userId);
    }

    public function updateDiagnosticUserStatus($userId){
        $user = $this->postDiagnosticUser()->where('user_id', $userId)->first();
        $progressPercentage = $this->getProgressPercentage($userId);

        if($user){
            $user->status = $progressPercentage > 99 ? 1 : 0;
            $user->save();
        }
    }

    public function completedPostDiagnosticTool($userId){
        return $this->postDiagnosticUser()->where([
           'user_id' => $userId,
           'status' => 1
        ])->first();
    }

}
