<?php

use App\Http\Controllers\PracticeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('/practice', [PracticeController::class, 'index'])->name('product.index');
    Route::get('/practice/create', [PracticeController::class,  "create"])->name('practice.create');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
