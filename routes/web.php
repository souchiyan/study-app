<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodosController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
});

//TodoList機能ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// Route::middleware('auth')->group(function () {
//     Route::get('/todo', [TodosController::class, 'index']);
//     Route::get("/todo/create", [TodosController::class, 'create']);
//     Route::post("/todo", [TodosController::class, "store"]);
// });
Route::get('/todo', [TodosController::class, 'index']);
Route::get("/todo/create", [TodosController::class, 'create']);
Route::post("/todo", [TodosController::class, "store"]);
Route::get('/todo/{todo}/edit', [TodosController::class, "edit"]);
Route::put('/todo/{todo}', [TodosController::class, "update"]);
Route::delete("/todo/{todo}", [TodosController::class, "delete"]);
// ーーーーーーーーーーーーーーーーーーーーーーーーーー
require __DIR__ . '/auth.php';
