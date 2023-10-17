<?php

use App\Http\Controllers\Admin\Module\AdminModuleController;
use App\Http\Controllers\Auth\Learning\LearningLoginController;
use App\Http\Controllers\Auth\Learning\LearningRegisterController;
use App\Http\Controllers\GithubDeploymentController;
use App\Http\Controllers\Learning\Assessment\LearningModuleAssessmentController;
use App\Http\Controllers\Learning\Course\LearningCourseController;
use App\Models\Brace\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Auth::routes();

// Redirect to external NA full url
Route::get('home', static function (){
    return Redirect::to('http://afchub.org');
})->name('home');

Route::get('about', static function (){
    return Redirect::to('https://afchub.org/about');
})->name('about');

Route::get('board', static function (){
    return Redirect::to('https://afchub.org/our-board');
})->name('board');

Route::get('partners', static function (){
    return Redirect::to('https://afchub.org/our-partners');
})->name('partners');

Route::get('team', static function (){
    return Redirect::to('http://afchub.org');
})->name('team');

Route::get('careers', static function (){
    return Redirect::to('https://afchub.org/careers');
})->name('careers');

Route::get('entrepreneurs', static function (){
    return Redirect::to('https://afchub.org/entrepreneurs');
})->name('entrepreneurs');

Route::get('membership', static function (){
    return Redirect::to('https://afchub.org/membership');
})->name('membership');

Route::get('data', static function (){
    return Redirect::to('https://afchub.org/data');
})->name('data');

Route::get('funding', static function (){
    return Redirect::to('https://afchub.org/funding');
})->name('funding');

Route::get('capacity-building', static function (){
    return Redirect::to('https://afchub.org/capacity-building');
})->name('capacity-building');

Route::get('events', static function (){
    return Redirect::to('https://afchub.org/events');
})->name('events');

Route::get('trainings', static function (){
    return Redirect::to('https://afchub.org/trainings');
})->name('trainings');

Route::get('ask-an-expert', static function (){
    return Redirect::to('https://afchub.org/ask-an-expert');
})->name('ask-an-expert');

Route::get('association-directory', static function (){
    return Redirect::to('https://afchub.org/association-directory');
})->name('association-directory');

Route::get('first-thursdays', static function (){
    return Redirect::to('https://afchub.org/first-thursdays');
})->name('first-thursdays');

Route::get('podcasts', static function (){
    return Redirect::to('https://afchub.org/podcasts');
})->name('podcasts');

Route::get('news-and-updates', static function (){
    return Redirect::to('https://afchub.org/news-update/all');
})->name('news-updates');

Route::get('marketplace', static function (){
    return Redirect::to('https://afchub.org/marketplace');
})->name('marketplace');

Route::get('/yaedp/application', static function (){
    return Redirect::to('https://afchub.org/yaedp/application');
})->name('yaedp.application');

Route::get('/lawff', static function (){
    return Redirect::to('https://lawff.afchub.org');
})->name('lawff');

Route::get('/sep', static function (){
    return Redirect::to('https://sep.afchub.org');
})->name('sep');

Route::get('member/login', static function (){
    return Redirect::to('http://afchub.org/login');
})->name('member.login');

Route::get('member/signup', static function (){
    return Redirect::to('http://afchub.org/login');
})->name('member.signup');


Route::get('/', static function () {
    return view('home.index');
})->name('home');

Route::get('/self-help', static function () {
    return view('home.self-help');
})->name('self-help');

Route::get('/application', static function () {
    return view('home.application.create');
})->name('application');

// Learning Account SPA
Route::get('/learning/register', [LearningRegisterController::class, 'index'])->name('learning.register');
Route::get('/learning/login', [LearningLoginController::class, 'loginPage'])->name('learning.login');
Route::get('/learning', [LearningLoginController::class, 'loginPage']);
Route::get('/learning/password/reset', [LearningLoginController::class, 'passwordResetPage'])
    ->name('learning.password.reset');
Route::get('/learning/password/reset/{verification_token}', [LearningLoginController::class, 'passwordUpdatePage'])
    ->name('learning.password.reset.token');

Route::get('/learning/course/resource/download', [LearningCourseController::class, 'downloadResource']);
Route::get('/learning/certificate/{user}/download', [LearningModuleAssessmentController::class, 'downloadCertificate']);

Route::get('/learning/{any}', static function () {
    return view('learning.index');
})->where('any', '^(?!/login).*$');

Route::get('/diagnostic/{any}', static function () {
    return view('diagnostic.index');
})->where('any', '^(?!/login).*$');


//GitHub Deployment
Route::post('/github/deploy', [GithubDeploymentController::class, 'deploy']);


Route::get('/yaedp/export-readiness-diagnostic/',
    [App\Http\Controllers\ExportDiagnosticTool\DiagnosticApplicationController::class, 'index'])
    ->name('yaedp.export-diagnostic.index');
Route::get('/yaedp/export-diagnostic/instructions',
    [App\Http\Controllers\ExportDiagnosticTool\DiagnosticApplicationController::class, 'instructions'])
    ->name('yaedp.export-diagnostic.instructions');
Route::get('/yaedp/export-diagnostic/participant-information',
    [App\Http\Controllers\ExportDiagnosticTool\DiagnosticApplicationController::class, 'participantInformation'])
    ->name('yaedp.export-diagnostic.participant-information');
Route::get('/yaedp/export-diagnostic/start',
    [App\Http\Controllers\ExportDiagnosticTool\DiagnosticApplicationController::class, 'start'])
    ->name('yaedp.export-diagnostic.start');
Route::get('/yaedp/export-diagnostic/logout',
    [App\Http\Controllers\ExportDiagnosticTool\DiagnosticApplicationController::class, 'logout'])
    ->name('yaedp.export-diagnostic.logout');

Route::get('/debug-sentry', static function () {
    throw new \RuntimeException('My first Sentry error!');
});

Route::get('/participants/not-started', [AdminModuleController::class, 'getParticipantsNotStartedProgram']);
Route::get('/update-module-assessment-status', [LearningModuleAssessmentController::class, 'updateModuleAssessmentStatus']);
Route::get('/user-not-have-assessment', function (){
    $selectedUsers = User::where('selected', 1)->with('course_assessments', 'module_assessments', 'business', 'country')
        ->doesntHave('course_assessments')->get();
    return $selectedUsers;
    dd($selectedUsers, $selectedUsers->count());
});

// Admin web routes
include __DIR__. '/admin/web.php';
