<?php

namespace App\Http\Controllers;

use App\Models\Preferencia;
use App\Models\UserPreferencia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PreferenciaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Auth::user()->id;
        $jogos = Preferencia::get()->toArray();

        return view('sojoga-frontend.adicionar-jogo', compact('jogos', 'id'));
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
        
        if ($request['preferencia'] === NULL) return redirect()->route('jogos.index')->with('success','Escolha uma opção!');

        $this->validate($request, [
            'preferencia' => 'required'
        ], [
            'required' => 'Campo Obrigatório'
        ]);
        
        $input = $request->all();
        $userId = Auth::user()->id;

        $verificacao = UserPreferencia::where('user_id', $userId)->where('preferencia_id', $input['preferencia'])->first();

        if($verificacao === NULL){
            UserPreferencia::create([
                'user_id' => $userId,
                'preferencia_id' => $input['preferencia']
            ]);
            return redirect()->route('jogos.index')->with('success','Jogo adicionado com sucesso!');
        }else{
            return redirect()->route('jogos.index')->with('success','Este jogo já foi adicionado.');
        }
        
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
