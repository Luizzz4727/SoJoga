<?php

namespace App\Http\Controllers;

use App\Models\Preferencia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PlayersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userLogadoId = Auth::user()->id;
        return view('sojoga-frontend.pesquisar-jogadores', compact('userLogadoId'));
    }

    public function search(Request $request)
    {
        $userLogadoId = Auth::user()->id;

        $filters = $request->except('_token');

        $dados = DB::table('users')->select('users.id', 'users.name as username', 'preferencias.name')
                            ->join('user_preferencias', 'users.id', '=', 'user_preferencias.user_id')
                            ->join('preferencias', 'user_preferencias.preferencia_id', '=', 'preferencias.id')
                            ->where('preferencias.name', 'like', "%{$request->search}%")
                            ->orWhere('preferencias.img', 'like', "%{$request->search}%")
                            // ->toSql();
                            ->get()->toArray();

        // $dados = Preferencia::join('user_preferencias', 'preferencias.id', '=', 'user_preferencias.preferencia_id')->join('users', 'user_preferencias.user_id', '=', 'users.id')->where('preferencias.name', 'like', "%{$request->search}%")->orWhere('preferencias.img', 'like', "%{$request->search}%")->get()->toArray();
        
        // dd($dados);

        return view('sojoga-frontend.pesquisar-jogadores', compact('dados', 'filters', 'userLogadoId'));
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
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
