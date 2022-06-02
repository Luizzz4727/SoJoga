@php
    use App\Helpers\Helper;
@endphp

@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Perfil')

@section('content')

    @include('sojoga-frontend._partials.header')

    <div class="perfil">
        <h1>{{ $user->name }}</h1>
        <div class="img-perfil"><img src="{{ asset('src/img/pugcornio.svg') }}"></div>
        @if ($userLogadoId == $id)
            <a class="edit-perfil" href="{{ route('users.edit', $id) }}">EDITAR PERFIL</a>
        @endif
        
        <div class="jogos">
            <h2>JOGOS</h2>
            <div class="imgs-jogos">
                @if (!empty($preferencias))
                    @foreach ($preferencias as $item)
                        <img src="{{ asset($item['img']) }}">
                    @endforeach
                @else
                    <p>Não há jogos ainda...</p>
                @endif
                
                
            </div>
        </div>
        <div class="contatos">
            <h2>Contato</h2>
            <div class="imgs-contato">

                @if ($user->facebook != NULL || $user->instagram != NULL || $user->whatsapp != NULL || $user->twitter != NULL)
                    @if ($user->facebook != NULL)
                        <a href="https://{{ $user->facebook }}"><img src="{{ asset('src/img/facebook.png') }}"></a>
                    @endif

                    @if ($user->instagram != NULL)
                        <a href="https://{{ $user->instagram }}"><img src="{{ asset('src/img/instagram.png') }}"></a>
                    @endif

                    @if ($user->whatsapp != NULL)
                        <a href="https://wa.me/55{{ Helper::removeSpecialCharacters($user->whatsapp) }}"><img src="{{ asset('src/img/whatsapp.svg') }}"></a>
                    @endif

                    @if ($user->twitter != NULL)
                        <a href="https://{{ $user->twitter }}"><img src="{{ asset('src/img/twitter.svg') }}"></a>
                    @endif
                @else
                    <p>Não há contatos ainda...</p>
                @endif
                
                
            </div>
        </div>

        @if ($userLogadoId == $id)
        <a href="{{ route("jogos.index") }}" class="adc-jogo">ADICIONAR JOGO</a>

        <form action="{{ route("logout") }}" method="post">
            @csrf
            <button type="submit" class="sair">Sair</button>
        </form>
        @endif

    </div>

    @include('sojoga-frontend._partials.footer')
    
@endsection
