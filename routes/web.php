<?php

use App\Http\Controllers\MaterialsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudytimeController;
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

//TodoList機能ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
Route::middleware('auth')->group(function () {
    Route::get('/todo', [TodosController::class, 'index']);
    Route::get("/todo/create", [TodosController::class, 'create']);
    Route::post("/todo", [TodosController::class, "store"]);
    Route::get('/todo/{todo}/edit', [TodosController::class, "edit"]);
    Route::put('/todo/{todo}', [TodosController::class, "update"]);
    Route::delete("/todo/{todo}", [TodosController::class, "delete"]);
});
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// Materials機能ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
Route::middleware('auth')->group(function () {
    Route::get('/material', [MaterialsController::class, 'index']);
    Route::get('/material/create', [MaterialsController::class, 'create']);
    Route::get('/material/{materials}', [MaterialsController::class, 'show']);
    Route::post('/material', [MaterialsController::class, 'store']);
    Route::get('/material/{materials}/edit', [MaterialsController::class, "edit"]);
    Route::put('/material/{materials}', [MaterialsController::class, "update"]);
    Route::delete('/material/{materials}', [MaterialsController::class, "delete"]);

});

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

//勉強時間管理機能ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

Route::get('/time', [StudytimeController::class, 'index']);
Route::get('/time/count', [StudytimeController::class, 'count']);
Route::post('/time', [StudytimeController::class, 'store']);
Route::delete('/time/{count}', [StudytimeController::class, 'delete']);

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
require __DIR__ . '/auth.php';