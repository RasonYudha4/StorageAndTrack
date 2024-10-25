<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/plans', [PlanController::class, 'index'])->name('plan.index');
    Route::post('/plans', [PlanController::class, 'store'])->name('plan.store');
    Route::delete('/plans', [PlanController::class, 'destroy'])->name('plan.delete');

    Route::get('/notes', [NoteController::class, 'index'])->name('note.index');
    Route::post('/notes', [NoteController::class, 'store'])->name('note.store');
    Route::delete('/notes/{$note}', [NoteController::class, 'destroy'])->name('note.delete');

    Route::get('/tasks', [TaskController::class, 'index'])->name('task.index');
    Route::post('/tasks', [TaskController::class, 'index'])->name('task.store');
    Route::delete('/tasks', [TaskController::class, 'destroy'])->name('task.delete');
});


require __DIR__.'/auth.php';
