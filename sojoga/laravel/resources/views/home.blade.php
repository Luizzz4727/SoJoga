@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Home')

@section('content')

    @include('sojoga-frontend._partials.header')

    <div class="listaJogos">
        <h1>Jogos Disponíveis</h1>
        <div class="catalogo-jogos">
            <h2>Fortnite</h2>
            <div class="img-jogo"><img src="{{ asset('src/img/fortnite.jpg') }}"></div>
        </div>
        <div class="catalogo-jogos">
            <h2>League Of Legends</h2>
            <div class="img-jogo"><img src="{{ asset('src/img/leagueoflegends.jpg') }}"></div>
        </div>
        <div class="catalogo-jogos">
            <h2>Valorant</h2>
            <div class="img-jogo"><img src="{{ asset('src/img/Valorant.jpg') }}"></div>
        </div>
    </div>
    
    @include('sojoga-frontend._partials.footer')

@endsection
