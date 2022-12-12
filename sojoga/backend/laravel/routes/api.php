<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['status' => 'OK']);
});

Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::get('/refresh', [AuthController::class, 'refresh']);
    Route::post('/register', [AuthController::class, 'register']);
});

Route::middleware('auth:api')->group(function (){
    Route::get('games/user/', [GameController::class, 'getGames']);
    Route::post('games/user/', [GameController::class, 'joinGameToUser']);

    Route::apiResource('chat', ChatController::class)->only(['index', 'store', 'show']);
    Route::apiResource('chat_message', ChatMessageController::class)->only(['index', 'store']);
    Route::apiResource('user', UserController::class)->only(['index']);
    Route::apiResource('games', GameController::class);
    Route::apiResource('search', SearchController::class);
    Route::apiResource('schedule', ScheduleController::class);
    
    Route::get('/get/user/{id}', [AuthController::class, 'getUser']);

    Route::group(['middleware' => ['role:Admin']], function () {
        Route::delete('/delete/{id}', [AuthController::class, 'destroy']);
        Route::get('/{acao}/{id}', [AuthController::class, 'lock']);
    });
    
});



