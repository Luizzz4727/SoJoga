@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Adicionar Jogo')

@section('content')

    @include('sojoga-frontend._partials.header')

    <div class="perfil">
        <h1>Pugcornio Maluko</h1>
        <div class="img-perfil"><img src="src/img/pugcornio.svg"></div>
        <a class="edit-perfil" href="#">EDITAR PERFIL</a>
        <div class="jogos">
            <h2>JOGOS</h2>
            <div class="imgs-jogos">
                <a href="#"><img src="src/img/lol.svg"></a>
                <a href="#"><img src="src/img/fort.svg"></a>
                <a href="#"><img src="src/img/valorant.svg"></a>
                <a href="#"><img src="src/img/lol.svg"></a>
                <a href="#"><img src="src/img/fort.svg"></a>
                <a href="#"><img src="src/img/valorant.svg"></a>
                <a href="#"><img src="src/img/lol.svg"></a>
                <a href="#"><img src="src/img/fort.svg"></a>
                <a href="#"><img src="src/img/valorant.svg"></a>
            </div>
        </div>
        <div class="contatos">
            <h2>Contato</h2>
            <div class="imgs-contato">
                <a href="#"><img src="src/img/facebook.png"></a>
                <a href="#"><img src="src/img/instagram.png"></a>
                <a href="#"><img src="src/img/whatsapp.svg"></a>
                <a href="#"><img src="src/img/twitter.svg"></a>
            </div>
        </div>
        <div href="#" class="adc-jogo">ADICIONAR JOGO</div>
    </div>

    @include('sojoga-frontend._partials.footer')
    
@endsection
