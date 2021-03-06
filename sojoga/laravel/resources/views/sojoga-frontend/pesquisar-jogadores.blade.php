@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Pesquisar Jogadores')

@section('content')

    @include('sojoga-frontend._partials.header')

    <div class="pesquisar-jogadores">
        <div class="pesquisa">
            <form action="{{ route('jogadores.search') }}" method="POST">
                @csrf
                <input type="text" name="search" value="{{ $filters['search'] ?? '' }}" placeholder="Digite o nome do jogo">
                <button type="submit"><img src="{{ asset('src/img/search.svg') }}"></button>
            </form>
        </div>

        @if (!empty($dados) && $filters['search'] != "")
            
        <div class="com-pesquisa">
            <h1>Resultados de "{{ $filters['search'] }}"</h1>
            <div class="result-pesquisa-jogadores">

                @foreach ($dados as $item)
                    
                    <div class="jogador">
                        <img src="{{ asset('src/img/pugcornio.svg') }}">
                        <div class="contexto-pes-jog">
                            <h2>{{ $item->username }}</h2>
                            <p>{{ $item->name }}</p>
                            <div class="ver-perfil"><a href="{{ route('users.show', $item->id) }}" >VER PERFIL</a></div>
                        </div>
                    </div>

                @endforeach
            </div>
        </div>

        @else

        <div class="sem-pesquisa">
            <h1>Pesquisar Jogadores</h1>
            <div class="img-jogo"><img src="{{ asset('src/img/controle.svg') }}"></div>
            <div class="txt-pesquisa-jogadores">
                <p>Digite o jogo na barra de pesquisa para
                    encontrar jogadores</p>
            </div>
        </div>
            
        @endif
        

        
        
        
    </div>

    @include('sojoga-frontend._partials.footer')

@endsection
