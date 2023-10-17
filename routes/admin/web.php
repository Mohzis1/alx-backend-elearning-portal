<?php

// Admin Account SPA
use App\Http\Controllers\Admin\Application\AdminApplicationController;
use App\Http\Controllers\Admin\DiagnosticTool\AdminDiagnosticToolController;
use App\Http\Controllers\Admin\User\AdminUserController;
use App\Http\Controllers\Auth\Admin\AdminLoginController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/login', [AdminLoginController::class, 'loginPage'])->name('admin.login');
Route::get('/admin', [AdminLoginController::class, 'loginPage'])->name('admin.login');

// always put routes with parameters above the "{any}" parameter
Route::get('/admin/applications/export/{form}', [AdminApplicationController::class, 'export']);
Route::get('/admin/users/assessment/export/{form}', [AdminUserController::class, 'export']);
Route::get('/admin/diagnostic-tool/results/export/{form_data}', [AdminDiagnosticToolController::class, 'export']);

Route::get('/admin/{any}', static function () {
    return view('admin.index');
})->where('any', '^(?!login).*$');
