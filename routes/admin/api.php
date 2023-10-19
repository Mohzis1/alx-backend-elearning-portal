<?php

// Admin
// Get users with specific guard
//Route::get('/admin/authenticate', static function (Request $request) {
//    return $request->user('admin-api');
//});

// Admin Dashboard
use App\Http\Controllers\Admin\Application\AdminApplicationController;
use App\Http\Controllers\Admin\Course\AdminCourseController;
use App\Http\Controllers\Admin\Course\AdminCourseResourceController;
use App\Http\Controllers\Admin\Dashboard\AdminDashboardController;
use App\Http\Controllers\Admin\DiagnosticTool\AdminDiagnosticToolController;
use App\Http\Controllers\Admin\Module\AdminModuleAssessmentController;
use App\Http\Controllers\Admin\Module\AdminModuleAssessmentQuestionController;
use App\Http\Controllers\Admin\Module\AdminModuleAssignmentController;
use App\Http\Controllers\Admin\Module\AdminModuleController;
use App\Http\Controllers\Admin\PostDiagnosticTool\AdminPostDiagnosticCategoryController;
use App\Http\Controllers\Admin\PostDiagnosticTool\AdminPostDiagnosticQuestionController;
use App\Http\Controllers\Admin\PostDiagnosticTool\AdminPostDiagnosticUserController;
use App\Http\Controllers\Admin\User\AdminUserController;
use App\Http\Controllers\Auth\Admin\AdminLoginController;
use App\Http\Controllers\Learning\DiagnosticToolsController;
use Illuminate\Support\Facades\Route;

//Admin Login
Route::post('/admin/login', [AdminLoginController::class, 'login']);
Route::get('/admin/authenticate', [AdminLoginController::class, 'authenticate']);

Route::get('/admin/dashboard/stats', [AdminDashboardController::class, 'getStats']);

// Admin Application
Route::get('/admin/applications', [AdminApplicationController::class, 'index']);
Route::get('/admin/applications/selected', [AdminApplicationController::class, 'selectedApplicants']);
Route::post('/admin/applications/search', [AdminApplicationController::class, 'search']);
Route::get('/admin/applications/select', [AdminApplicationController::class, 'select']);

// Admin Selected Users Assessments
Route::get('/admin/users/selected/assessments', [AdminUserController::class, 'index']);
Route::post('/admin/users/selected/assessments/search', [AdminUserController::class, 'search']);

// Admin Module
Route::get('/admin/modules', [AdminModuleController::class, 'index']);
Route::post('/admin/modules/search', [AdminModuleController::class, 'search']);
Route::post('/admin/modules/store', [AdminModuleController::class, 'store']);
Route::post('/admin/modules/update', [AdminModuleController::class, 'update']);
Route::delete('/admin/modules/delete', [AdminModuleController::class, 'destroy']);

// Admin Module Assignment
Route::get('/admin/module/assignments', [AdminModuleAssignmentController::class, 'index']);
Route::post('/admin/module/assignments/store', [AdminModuleAssignmentController::class, 'store']);
Route::post('/admin/module/assignments/update', [AdminModuleAssignmentController::class, 'update']);
Route::delete('/admin/module/assignments/delete', [AdminModuleAssignmentController::class, 'destroy']);

// Admin Module Assignment Submissions
Route::get('/admin/module/assignments/submissions', [AdminModuleAssignmentController::class, 'submissions']);
Route::post('/admin/module/assignments/submissions/search', [AdminModuleAssignmentController::class, 'searchSubmissions']);

// Admin Module Assessment Question
Route::get('/admin/module/assessment/questions', [AdminModuleAssessmentQuestionController::class, 'index']);
Route::post('/admin/module/assessment/questions/store', [AdminModuleAssessmentQuestionController::class, 'store']);
Route::post('/admin/module/assessment/questions/update', [AdminModuleAssessmentQuestionController::class, 'update']);
Route::delete('/admin/module/assessment/questions/delete', [AdminModuleAssessmentQuestionController::class, 'destroy']);

// Admin Assessment
Route::get('/admin/module/assessment', [AdminModuleAssessmentController::class, 'index']);

// Admin Course
Route::get('/admin/courses', [AdminCourseController::class, 'index']);
Route::get('/admin/module/courses', [AdminCourseController::class, 'moduleCourses']);
Route::post('/admin/courses/search', [AdminCourseController::class, 'search']);
Route::post('/admin/courses/store', [AdminCourseController::class, 'store']);
Route::post('/admin/courses/update', [AdminCourseController::class, 'update']);
Route::delete('/admin/courses/delete', [AdminCourseController::class, 'destroy']);

// Admin Course Resources
Route::get('/admin/course/resources', [AdminCourseResourceController::class, 'index']);
Route::post('/admin/course/resources/store', [AdminCourseResourceController::class, 'store']);
Route::post('/admin/course/resources/update', [AdminCourseResourceController::class, 'update']);
Route::delete('/admin/course/resources/delete', [AdminCourseResourceController::class, 'destroy']);

// Admin Diagnostic Tool
Route::get('/admin/diagnostic-tool/results', [AdminDiagnosticToolController::class, 'results']);
Route::post('/admin/diagnostic-tool/results/search', [AdminDiagnosticToolController::class, 'search']);
Route::get('/user-answer_byid/{id}', [DiagnosticToolsController::class, 'fetchUserAnswersById']);
Route::get('/user-answer_byemail/{email}', [DiagnosticToolsController::class, 'fetchUserAnswersByEmail']);
Route::get('/learning/diagnostic-tool', [DiagnosticToolsController::class, 'index']);

Route::post('/create_question', [DiagnosticToolsController::class, 'store']);
Route::get('/diagnostic-question/{id}', [DiagnosticToolsController::class, 'getOneQuestion']);
Route::put('/diagnostic-question/{id}', [DiagnosticToolsController::class, 'editOneQuestion']);
Route::delete('/diagnostic-question/{id}', [DiagnosticToolsController::class, 'deleteOneQuestion']);

// Admin Post Diagnostic Tool Categories
Route::get('/admin/post-diagnostic-tool/categories',
    [AdminPostDiagnosticCategoryController::class, 'index']);
Route::get('/admin/post-diagnostic-tool/category/questions',
    [AdminPostDiagnosticCategoryController::class, 'getCategoryQuestions']);
Route::post('/admin/post-diagnostic-tool/category/store',
    [AdminPostDiagnosticCategoryController::class, 'store']);
Route::post('/admin/post-diagnostic-tool/category/update',
    [AdminPostDiagnosticCategoryController::class, 'update']);
Route::delete('/admin/post-diagnostic-tool/category/delete',
    [AdminPostDiagnosticCategoryController::class, 'delete']);

// Admin Post Diagnostic Tool Questions
Route::get('/admin/post-diagnostic-tool/questions',
    [AdminPostDiagnosticQuestionController::class, 'index']);
Route::get('/admin/post-diagnostic-tool/all-questions',
    [AdminPostDiagnosticQuestionController::class, 'allQuestions']);
Route::post('/admin/post-diagnostic-tool/questions/search',
    [AdminPostDiagnosticQuestionController::class, 'search']);
Route::post('/admin/post-diagnostic-tool/question/store',
    [AdminPostDiagnosticQuestionController::class, 'store']);
Route::post('/admin/post-diagnostic-tool/question/update',
    [AdminPostDiagnosticQuestionController::class, 'update']);
Route::delete('/admin/post-diagnostic-tool/question/delete',
    [AdminPostDiagnosticQuestionController::class, 'delete']);

// Admin Post Diagnostic Tool Options
Route::get('/admin/post-diagnostic-tool/question/options',
    [AdminPostDiagnosticQuestionController::class, 'getQuestionOptions']);
Route::post('/admin/post-diagnostic-tool/question/option/store',
    [AdminPostDiagnosticQuestionController::class, 'storeQuestionOption']);
Route::delete('/admin/post-diagnostic-tool/option/delete',
    [AdminPostDiagnosticQuestionController::class, 'deleteOption']);

// Admin Post Diagnostic Tool Users
Route::get('/admin/post-diagnostic-tool/users',
    [AdminPostDiagnosticUserController::class, 'index']);
Route::post('/admin/post-diagnostic-tool/users/search',
    [AdminPostDiagnosticUserController::class, 'search']);
Route::delete('/admin/post-diagnostic-tool/user/delete',
    [AdminPostDiagnosticUserController::class, 'delete']);

// Admin Logout
Route::get('/admin/logout', [AdminLoginController::class, 'logout']);
