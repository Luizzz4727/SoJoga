<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\Helper;
use App\Models\Chat;
use App\Models\Games;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    protected function respondWithToken($token, $user='', $admin="")
    {
        return response()->json([
            'to_use' => 'Bearer '.$token,
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'admin' => $admin
        ]);
    }

    public function login(Request $request){

        $this->validate($request, [
            'username' => 'required',
            'password' => 'required',
        ], [
            'required' => 'Campo Obrigatório',
        ]);

        $credentials = $request->all();

        $userStatus = User::where('username', $credentials['username'])->first()->status ?? '';

        if (!empty($userStatus) && $userStatus != "A")
            return Helper::geraResponse(401, 'Usuário não autorizado');

        if (! $token = auth()->attempt($credentials)) {
            return Helper::geraResponse(401, 'Usuário ou Senha incorretos');
        }

        $user = auth()->user();
        $roles = $user->getRoleNames();

        if(count($roles) != 0){
            $admin = 1;
        }else{
            $admin = 0;
        }

        unset($user['roles']);

        return $this->respondWithToken($token, $user, $admin);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function getUser()
    {
        $user = auth()->user();

        if(empty($user))
            return Helper::geraResponse(401, 'Usuário não encontrado');

        $groups = Chat::select('chats.id', 'chats.name', 'chats.path_image', 'chats.created_at', 'users.name as created_by', 'games.name as game', DB::raw('count(chat_participants.chat_id) as participants'))
                        ->join('games', 'chats.game_id', '=', 'games.id')
                        ->join('users', 'chats.created_by', '=', 'users.id')
                        ->join('chat_participants', 'chats.id', '=', 'chat_participants.chat_id')
                            ->where('chat_participants.user_id', $user->id)
                            ->where('chats.is_private', 0)
                            ->groupBy('chat_participants.chat_id')
                            ->get();
                                

        $games = Games::select('games.id', 'games.name', 'games.path_image')
                        ->join('game_users', 'games.id', '=', 'game_users.game_id')
                            ->where('game_users.user_id', $user->id)
                                ->get();

        return response()->json([
            "user" => $user,
            "groups" => $groups,
            "games" => $games
        ]);
    }

    public function getUserById($id)
    {
        $user = User::find($id);

        if(empty($user))
            return Helper::geraResponse(401, 'Usuário não encontrado');

        $groups = Chat::select('chats.id', 'chats.name', 'chats.path_image', 'chats.created_at', 'users.name as created_by', 'games.name as game', DB::raw('count(chat_participants.chat_id) as participants'))
                        ->join('games', 'chats.game_id', '=', 'games.id')
                        ->join('users', 'chats.created_by', '=', 'users.id')
                        ->join('chat_participants', 'chats.id', '=', 'chat_participants.chat_id')
                            ->where('chat_participants.user_id', $user->id)
                            ->where('chats.is_private', 0)
                            ->groupBy('chat_participants.chat_id')
                            ->get();
                                

        $games = Games::select('games.id', 'games.name', 'games.path_image')
                        ->join('game_users', 'games.id', '=', 'game_users.game_id')
                            ->where('game_users.user_id', $user->id)
                                ->get();

        return response()->json([
            "user" => $user,
            "groups" => $groups,
            "games" => $games
        ]);
    }

    public function register(Request $request)
    {

        if ($request['acao'] == 'update-user') {

            $idUser = auth()->user()->id;
            $idUserToArray = ",".$idUser;

            if(!empty($request['password'])) {
                $validPass = "required|min:8";
                $validConfirmPass = "required|";
            } else {
                $validPass = "";
                $validConfirmPass = "";
            }

        } else {

            $idUserToArray = "";
            $validPass = "required|min:8";
            $validConfirmPass = "required|";

        }

        $this->validate($request, [
            'idUser',
            'acao' => 'required',
            'username' => 'required|max:100|unique:users,username'.$idUserToArray,
            'name' => 'required|max:100',
            'email' => 'required|email|unique:users,email'.$idUserToArray,
            'password' => $validPass,
            'confirmPassword' => $validConfirmPass.'same:password'
        ], [
            'required' => 'Campo Obrigatório',
            'unique' => 'Este nome de usuário já está sendo utilizado',
            'same' => 'As senhas não estão iguais',
            'max' => 'Campo deve conter no máximo 100 caracteres',
            'min' => 'Senha deve conter no mínimo 8 caracteres'
        ]);


        $data = $request->except('_token', 'confirmPassword', 'acao', 'idUser');

        if (!empty($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        } else {
            $user = User::find($idUser);
            $data['password'] = $user->password;
        }

        if ($request['acao'] == 'create-user') {
            $user = User::create($data);
        } else if ($request['acao'] == 'update-user') {
            $user = User::find($idUser);
            $user->update($data);
        }

        return Helper::geraResponse(200, "Database updated successfully", "user", $user);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return Helper::geraResponse(200, "User deleted successfully");
    }

    public function lock($acao, $id)
    {

        $user = User::find($id);

        if($acao == "lock"){
            $user->status = "I";
            $msg = "locked";
        }else if($acao == "unlock"){
            $user->status = "A";
            $msg = "unlocked";
        }

        $user->save();

        return Helper::geraResponse(200, "User $msg successfully");
    }

}