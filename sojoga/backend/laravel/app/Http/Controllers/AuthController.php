<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\Helper;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    protected function respondWithToken($token, $user='')
    {
        return response()->json([
            'to_use' => 'Bearer '.$token,
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
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

        return $this->respondWithToken($token, auth()->user());
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

    public function register(Request $request)
    {

        if ($request['acao'] == 'update-user') {

            $validIdUser = "required";

            $idUser = $request['idUser'];
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
            $validIdUser = "";
            $validPass = "required|min:8";
            $validConfirmPass = "required|";

        }

        $this->validate($request, [
            'idUser' => $validIdUser,
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
