@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Pesquisar Jogadores')

@section('content')

    @include('sojoga-frontend._partials.header')

    <div class="pesquisar-jogadores">
        <div class="pesquisa">
            <div>
                <input type="search" placeholder="Digite o nome do jogo">
                <img src="src/img/search.svg">
            </div>
        </div>
        <div class="sem-pesquisa">
            <h1>Pesquisar Jogadores</h1>
            <div class="img-jogo"><img src="src/img/controle.svg"></div>
            <div class="txt-pesquisa-jogadores">
                <p>Digite o jogo na barra de pesquisa para
                    encontrar jogadores</p>
            </div>
        </div>

        <div class="com-pesquisa">
            <h1>Resultados de "LOL"</h1>
            <div class="result-pesquisa-jogadores">
                <div class="jogador">
                    <img src="src/img/jogador.svg">
                    <div class="contexto-pes-jog">
                        <h2>Cat Gamer</h2>
                        <p>League of Legends</p>
                        <div class="ver-perfil"><a href="#" >VER PERFIL</a></div>
                    </div>
                </div>
                <div class="jogador">
                    <img src="src/img/jogador2.svg">
                    <div class="contexto-pes-jog">
                        <h2>Campeão Gamer</h2>
                        <p>League of Legends</p>
                        <div class="ver-perfil"><a href="#" >VER PERFIL</a></div>
                    </div>
                </div>
                <div class="jogador">
                    <img src="src/img/jogador3.svg">
                    <div class="contexto-pes-jog">
                        <h2>Unicórnio Gamer</h2>
                        <p>League of Legends</p>
                        <div class="ver-perfil"><a href="#" >VER PERFIL</a></div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>

    @include('sojoga-frontend._partials.footer')

@endsection
