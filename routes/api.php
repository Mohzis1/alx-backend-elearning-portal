<?php

use App\Http\Controllers\Auth\Learning\LearningLoginController;
use App\Http\Controllers\Base\BaseController;
use App\Http\Controllers\Learning\Assessment\LearningModuleAssessmentController;
use App\Http\Controllers\Learning\Course\LearningCourseController;
use App\Http\Controllers\Learning\Course\LearningCourseDiscussionController;
use App\Http\Controllers\Learning\LearningAccountController;
use App\Http\Controllers\Learning\LearningDashboardController;
use App\Http\Controllers\Learning\Module\LearningModuleAssignmentController;
use App\Http\Controllers\Learning\Module\LearningModuleController;
use App\Http\Controllers\PostDiagnosticTool\PostDiagnosticToolController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Brace\BraceApplicationController;
use App\Http\Controllers\Learning\DiagnosticToolsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Application
Route::post('/application/store', [BraceApplicationController::class, 'store']);

// Countries
Route::get('/countries/africa', [BaseController::class, 'getAfricanCountries']);
Route::get('/world/countries/africa', [BaseController::class, 'getWorldAfricanCountries']);
Route::get('/world/states/africa', [BaseController::class, 'getWorldAfricanStates']);

// Learning Login
Route::post('/learning/login', [LearningLoginController::class, 'login']);
Route::post('/learning/password/reset', [LearningLoginController::class, 'submitPasswordReset']);
Route::post('/learning/password/update', [LearningLoginController::class, 'updatePasswordReset']);

// Learning Authenticate User
Route::get('/learning/authenticate', [LearningLoginController::class, 'authenticate']);

// Custom sanctum admin guard authentication for Learning Portal
Route::middleware('auth:api')->group(static function (){
    // Learning Dashboard
    Route::get('/learning/dashboard/summary', [LearningDashboardController::class, 'dashboardSummary']);

    // Learning Module
    Route::get('/learning/modules', [LearningModuleController::class, 'index']);
    Route::get('/learning/module', [LearningModuleController::class, 'show']);

    // Module Assignment
    Route::get('/learning/module/assignment', [LearningModuleAssignmentController::class, 'show']);
    Route::post('/learning/module/assignment/store', [LearningModuleAssignmentController::class, 'store']);

    // Module Assessment
    Route::get('/learning/module/assessment/questions', [LearningModuleAssessmentController::class, 'questions']);
    Route::get('/learning/module/assessment/status', [LearningModuleAssessmentController::class, 'userStatus']);
    Route::post('/learning/module/assessment/store', [LearningModuleAssessmentController::class, 'submitAssessment']);
    Route::get('/learning/module/assessment', [LearningModuleAssessmentController::class, 'index']);
    Route::get('/learning/module/assessment/history', [LearningModuleAssessmentController::class, 'moduleAssessmentHistory']);

    // Learning Course
    Route::get('/learning/courses', [LearningCourseController::class, 'index']);
    Route::get('/learning/course', [LearningCourseController::class, 'show']);
    Route::post('/learning/course/user-activity/store', [LearningCourseController::class, 'storeUserActivity']);
    Route::get('/learning/course/user-activity', [LearningCourseController::class, 'getUserActivity']);
    Route::get('/learning/course/resource/download', [LearningCourseController::class, 'downloadResource']);

    // Learning Course Discussion
    Route::get('/learning/course/discussion', [LearningCourseDiscussionController::class, 'index']);
    Route::post('/learning/course/discussion/comment', [LearningCourseDiscussionController::class, 'store']);
    Route::get('/learning/course/discussion/comment/delete', [LearningCourseDiscussionController::class, 'destroy']);
    Route::post('/learning/course/discussion/like', [LearningCourseDiscussionController::class, 'likeComment']);
    Route::get('/learning/course/discussion/liked', [LearningCourseDiscussionController::class, 'liked']);

    // Diagnostic tool
    Route::get('/learning/diagnostic-tool/completed', [DiagnosticToolsController::class, 'diagnosticCompleted']);
    Route::get('/user-details', [DiagnosticToolsController::class, 'userDetails']);
    Route::group(['prefix' => 'diagnostic-tool'], function () {
        Route::post('/add_answer', [DiagnosticToolsController::class, 'addUserAnswers']);
        Route::get('/fetch_answer', [DiagnosticToolsController::class, 'fetchUserAnswers']);
        Route::get('/fetch_answer_status', [DiagnosticToolsController::class, 'getAnswerStatus']);
        Route::post('/create_or_update_answer_status', [DiagnosticToolsController::class, 'createOrUpdateAnswerStatus']);
    });

    // Learning Post Diagnostic Tool
    Route::get('/learning/post-diagnostic-tool/get-question', [PostDiagnosticToolController::class, 'getQuestion']);
    Route::post('/learning/post-diagnostic-tool/answer/store', [PostDiagnosticToolController::class, 'storeAnswer']);
    Route::get('/learning/post-diagnostic-tool/application/progress', [PostDiagnosticToolController::class, 'applicationProgress']);

    // Learning Account Settings
    Route::post('/learning/account/update/account', [LearningAccountController::class, 'updateAccount']);

    // Learning Logout
    Route::get('/learning/logout', [LearningLoginController::class, 'logout']);
});

// Admin APIs
include __DIR__. '/admin/api.php';
