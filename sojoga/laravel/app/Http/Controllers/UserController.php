<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserPreferencia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::where('id', $id)->first();

        if($user === NULL){
            abort(404);
        }

        $preferencias = UserPreferencia::join('preferencias', 'user_preferencias.preferencia_id', '=', 'preferencias.id')->where('user_preferencias.user_id', $id)->get()->toArray();
        $userLogadoId = Auth::user()->id;

        return view('sojoga-frontend.perfil', compact('user', 'preferencias', 'id', 'userLogadoId'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $userLogadoId = Auth::user()->id;
        $user = User::where('id', $id)->first();

        if($user === NULL){
            abort(404);
        }

        if($userLogadoId != $id){
            abort(403);
        }

        return view('sojoga-frontend.editar-usuario', compact('user', 'id'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        ($request['whatsapp'] != '') ? $validation = "celular_com_ddd" : $validation = "";
        ($request['password'] != '') ? $validationPass = "required" : $validationPass = "";

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'nickname' => 'required|string|max:255|unique:users,nickname,'. $id,
            'email' => 'required|string|email|max:255|unique:users,email,'. $id,
            'whatsapp' => $validation,
            'facebook' => 'max:255',
            'instagram' => 'max:255',
            'twitter' => 'max:255',            
            'password' => $validationPass.'|same:confirmPassword',
            'confirmPassword' => $validationPass
        ], [
            'required' => 'Campo Obrigatório',
            'email' => 'Digite um e-mail válido',
            'same' => 'As senhas não estão iguais',
            'unique' => 'Já está sendo utilizado',
            'min' => 'Mínimo de 8 caracteres',
            'celular_com_ddd' => 'Digite um telefone válido'
        ]);

        $data = $request->except('_token', 'confirmPassword');
        
        if (!empty($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        } else {
            $user = User::find($id);
            $data['password'] = $user->password;
        }

        $user = User::find($id);
        $user->update($data);
        
        return redirect()->route('users.show', $id)->with('success','Perfil Atualizado!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
