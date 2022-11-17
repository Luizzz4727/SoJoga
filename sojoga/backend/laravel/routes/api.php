<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['status' => 'OK']);
});

// Route::prefix('auth')->group(function () {
//     Route::post('/login', [AuthController::class, 'login']);
//     Route::get('/me', [AuthController::class, 'me']);
//     Route::get('/logout', [AuthController::class, 'logout']);
//     Route::get('/refresh', [AuthController::class, 'refresh']);
//     Route::post('/register', [AuthController::class, 'register']);
// });

// Route::delete('/delete/{id}', [AuthController::class, 'destroy']);
// Route::get('/{acao}/{id}', [AuthController::class, 'lock']);

Route::prefix('auth')
    ->as('auth.')
    ->group(function(){

        Route::post('login', [AuthController::class, 'login'])->name('login');
        Route::post('register', [AuthController::class, 'register'])->name('register');
        Route::post('login_with_token', [AuthController::class, 'loginWithToken'])
            ->middleware('auth:sanctum')
            ->name('login_with_token');
        Route::get('logout', [AuthController::class, 'logout'])
            ->middleware('auth:sanctum')
            ->name('logout');

    });

Route::middleware('auth:sanctum')->group(function (){
    Route::apiResource('chat', ChatController::class)->only(['index', 'store', 'show']);
    Route::apiResource('chat_message', ChatMessageController::class)->only(['index', 'store']);
    Route::apiResource('user', UserController::class)->only(['index']);

});