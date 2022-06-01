@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Adicionar Jogo')

@section('content')

    @include('sojoga-frontend._partials.header')

    <div class="adicionar-jogo">
        <div class="img-adc-jogo"><img src="src/img/controle.svg"></div>
        <h1>Adicionar Jogo</h1>
        <div class="select-adc-jogo">
            <select>
                <option selected>Escolha um Jogo</option>
                <option value="volvo">League of Legends</option>
                <option value="saab">Fortnite</option>
                <option value="mercedes">Valorant</option>
            </select>
        </div>
        <div href="#" class="adc-jogo">ADICIONAR JOGO</div>
    </div>

    @include('sojoga-frontend._partials.footer')

@endsection
