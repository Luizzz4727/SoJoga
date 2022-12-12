<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Http\Requests\StoreGameRequest;
use App\Http\Requests\StoreGameUserRequest;
use App\Models\Games;
use App\Models\GameUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GameController extends Controller
{

    /**
     * Get all games
     *
     * @return JsonResponse
     */
    public function index() : JsonResponse
    {
        $games = Games::all();
        return $this->success($games);

    }

    public function getGames() : JsonResponse
    {
        $games = Games::leftJoin('game_users', 'games.id', '=', 'game_users.game_id')
                        ->whereNull('game_users.user_id')
                        ->orWhere('game_users.user_id', '!=', auth()->user()->id)
                        ->get();
                        
        return $this->success($games);

    }

    public function store(StoreGameRequest $request) : JsonResponse
    {
        $data = $request->validated();
    
        $chat = Games::create($data);

        return $this->success($chat);
    }

    public function joinGameToUser(StoreGameUserRequest $request) : JsonResponse
    {

        $data = $request->validated();
        $validation = GameUsers::where('game_id', $data['game_id'])->where('user_id', auth()->user()->id)->get();

        if(count($validation) != 0)
            return $this->error('This user already have this game');

        $gameUser = GameUsers::create(['game_id' => $data['game_id'], 'user_id' => auth()->user()->id]);

        return $this->success($gameUser);

    }




    
}
