<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PlayersController;
use App\Http\Controllers\PreferenciaController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
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

Route::get('frontend', function () {
    return view('sojoga-frontend.perfil');
})->name('frontend');

Route::get('/', function () {
    return redirect()->route('login');
})->name('login');

Auth::routes();

Route::group(['middleware' => ['auth']], function() {

    Route::resource('users', UserController::class);
    Route::resource('jogos', PreferenciaController::class);
    Route::resource('jogadores', PlayersController::class);
    Route::any('jogadores/search', [PlayersController::class, 'search'])->name('jogadores.search');
    Route::get('/home', [HomeController::class, 'index'])->name('home');

});


