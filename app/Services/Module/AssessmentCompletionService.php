<?php

namespace App\Services\Module;

use App\Models\Learning\LearningCertificateDownload;
use App\Models\Learning\Module\BraceModule;
use App\Models\Learning\Module\BraceModuleView;
use App\Services\Base\BaseService;
use Carbon\Carbon;
use PDF;

class AssessmentCompletionService
{
    protected ModuleService $module;
    protected ModuleAssessmentService $moduleAssessment;
    public function __construct(
        ModuleService $module,
        ModuleAssessmentService $moduleAssessment
    ){
        $this->module = $module;
        $this->moduleAssessment = $moduleAssessment;
    }

    public function totalRequiredScoreForAllModules(): int
    {
        $modules = $this->module->braceModule()
            ->with('assessment_questions')
            ->has('assessment_questions')->get();
        $sum = 0;
        foreach ($modules as $module){
            $sum += $module->assessment_questions->count();
        }
        return $sum;
    }

    public function getCompletedModulesByUser($userId): \Illuminate\Database\Eloquent\Builder
    {
        return $this->moduleAssessment->moduleAssessment()
            ->with('module')->has('module')->where([
            ['user_id', $userId],
            ['status', 1]
        ]);
    }

    public function accumulatedAssessmentScore($userId): array
    {
        $assessment = $this->getCompletedModulesByUser($userId);
        // Get percentage sum and total of completed module assessments
        $sumPercent = $assessment->sum('percent');
        $sumScore = $assessment->sum('score');
        $countCompleted = $assessment->count();
        $countModules = $this->module->braceModule()->count();

        $score = 0;
        $percent = 0;

        // If total completed module assessment is not equal to total modules,
        // return 0, else calculate the over all module assessment
        if($countCompleted === $countModules){
            // Calculate both percentages
            $score = ($sumScore / $this->totalRequiredScoreForAllModules()) * 100;
            $percent = ($sumPercent / ($countModules * 100)) * 100;
        }

        return [
            'score' => number_format($score, 2, '.', ''),
            'percent' => number_format($percent, 2, '.', '')
        ];
    }

    public static function accumulatedAssessmentScoreStatic($userId): array
    {
        $assessment = BraceModuleView::where([
            ['user_id', $userId],
            ['status', 1],
        ]);
        $module = new BraceModule();

        // Get percentage sum and total of completed module assessments
        $sumPercent = $assessment->sum('percent');
        $sumScore = $assessment->sum('score');
        $countCompleted = $assessment->count();
        $countModules = $module->count();

        $score = 0;
        $percent = 0;

        // If total completed module assessment is not equal to total modules,
        // return 0, else calculate the over all module assessment
        if($countCompleted === $countModules){
           // $score = ($sumScore / (new AssessmentCompletionService)->totalRequiredScoreForAllModules()) * 100;
            $percent = ($sumPercent / ($countModules * 100)) * 100;
        }

        return [
            'score' => $percent,
            'percent' => $percent
        ];
    }

    /**
     * @throws \JsonException
     */
    public function generateCertificate($user) {
        $user = json_decode($user, true, 512, JSON_THROW_ON_ERROR);
        // Certificate image path and type
        $path = 'images/brace-certificate-700.jpg';
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        // Convert to base64
        $base64_image = 'data:image/' . $type . ';base64,' . base64_encode($data);

        $imageData = [
            'name' => $user['first_name'].' '.$user['middle_name'].' '.$user['last_name'],
            'current_date' => Carbon::now()->format('jS \\of F Y'),
            'certificate_image' => $base64_image,
            'certificate_reference' => BaseService::randomCharacters(10, 'ABCDEFGH1234567890'),
        ];

        // Save download records
        $downloads = new LearningCertificateDownload();
        $downloads->user_id = $user['id'];
        $downloads->certificate_reference = $imageData['certificate_reference'];
        ++$downloads->number_of_downloads;
        $downloads->save();

        // download PDF file with download method
        return PDF::loadView('certificate.index', $imageData)->download($user['first_name'].'_'.$user['middle_name'].'_'.$user['last_name'].'_BRACE_Certificate.pdf');
    }
}
