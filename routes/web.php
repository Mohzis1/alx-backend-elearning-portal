<?php

use App\Http\Controllers\Admin\Application\AdminApplicationController;
use App\Http\Controllers\Admin\DiagnosticTool\AdminDiagnosticToolController;
use App\Http\Controllers\Auth\Admin\AdminLoginController;
use App\Http\Controllers\Auth\Learning\LearningLoginController;
use App\Http\Controllers\Auth\Learning\LearningRegisterController;
use App\Http\Controllers\GithubDeploymentController;
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
Route::get('/', static function () {
    return view('home.index');
})->name('home');

Route::get('/about', static function () {
    return view('home.about');
})->name('about');


// Admin Account SPA
Route::get('/admin/login', [AdminLoginController::class, 'loginPage'])->name('admin.login');
Route::get('/admin', [AdminLoginController::class, 'loginPage'])->name('admin.login');

// always put routes with parameters above the "{any}" parameter
Route::get('/admin/applications/export/{form}', [AdminApplicationController::class, 'export']);
Route::get('/admin/diagnostic-tool/results/export/{form_data}', [AdminDiagnosticToolController::class, 'export']);

Route::get('/admin/{any}', static function () {
    return view('admin.index');
})->where('any', '^(?!login).*$');

// Learning Account SPA
Route::get('/learning/register', [LearningRegisterController::class, 'index'])->name('learning.register');
Route::get('/learning/login', [LearningLoginController::class, 'loginPage'])->name('learning.login');
Route::get('/learning', [LearningLoginController::class, 'loginPage']);
Route::get('/learning/password/reset', [LearningLoginController::class, 'passwordResetPage'])
    ->name('learning.password.reset');
Route::get('/learning/password/reset/{verification_token}', [LearningLoginController::class, 'passwordUpdatePage'])
    ->name('learning.password.reset.token');

Route::get('/learning/{any}', static function () {
    return view('learning.index');
})->where('any', '^(?!/login).*$');

//GitHub Deployment
Route::post('/github/deploy', [GithubDeploymentController::class, 'deploy']);
