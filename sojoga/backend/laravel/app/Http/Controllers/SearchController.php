<?php

namespace App\Http\Controllers;

use App\Http\Requests\SearchRequest;
use App\Models\Chat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{

    public function index(SearchRequest $request)
    {

        $data = $request->validated();


        // PAREI AQUI -- trazer dados da pesquisa de grupos
        $groups = Chat::select('chats.name','chats.id', 'chats.path_image', 'chats.created_at', 'users.name as created_by', 'games.name as game', DB::raw('count(chat_participants.chat_id) as participants'))
                        ->join('games', 'chats.game_id', '=', 'games.id')
                        ->join('users', 'chats.created_by', '=', 'users.id')
                        ->join('chat_participants', 'chats.id', '=', 'chat_participants.chat_id')
                            ->where('chats.is_private', 0)
                            ->where('chats.name', 'LIKE', "%{$request['search']}%")
                            ->orWhere('games.name', 'LIKE', "%{$request['search']}%")
                            ->groupBy('chat_participants.chat_id')
                            ->get();

        $players = User::select(
                                'users.id',
                                'users.name as username',
                                DB::raw("GROUP_CONCAT(`games`.`name` SEPARATOR ', ') as games")
                               )
                         ->join('game_users', 'users.id', '=', 'game_users.user_id')
                         ->join('games', 'game_users.game_id', '=', 'games.id')
                            ->where('users.name', 'LIKE', "%{$request['search']}%")
                            ->orWhere('users.username', 'LIKE', "%{$request['search']}%")
                            ->orWhere('games.name', 'LIKE', "%{$request['search']}%")
                            ->groupBy('users.id')
                            ->get();

        return $this->success(['groups' => $groups, 'players' => $players]);

    }

}
