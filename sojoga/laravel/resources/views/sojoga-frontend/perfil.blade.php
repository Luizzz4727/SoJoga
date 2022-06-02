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
        <a class="edit-perfil" href="{{ route('users.edit', $id) }}">EDITAR PERFIL</a>
        <div class="jogos">
            <h2>JOGOS</h2>
            <div class="imgs-jogos">
                @if (!empty($preferencias))
                    @foreach ($preferencias as $item)
                        <img src="{{ asset($item['img']) }}">
                    @endforeach
                @else
                    Não há jogos ainda...
                @endif
                
                
            </div>
        </div>
        <div class="contatos">
            <h2>Contato</h2>
            <div class="imgs-contato">

                @if ($user->facebook != NULL || $user->instagram != NULL || $user->whatsapp != NULL || $user->twitter != NULL)
                    @if ($user->facebook != NULL)
                        <a href="{{ $user->facebook }}"><img src="{{ asset('src/img/facebook.png') }}"></a>
                    @endif

                    @if ($user->instagram != NULL)
                        <a href="{{ $user->instagram }}"><img src="{{ asset('src/img/instagram.png') }}"></a>
                    @endif

                    @if ($user->whatsapp != NULL)
                        <a href="wa.me/55{{ Helper::removeSpecialCharacters($user->whatsapp) }}"><img src="{{ asset('src/img/whatsapp.svg') }}"></a>
                    @endif

                    @if ($user->twitter != NULL)
                        <a href="{{ $user->twitter }}"><img src="{{ asset('src/img/twitter.svg') }}"></a>
                    @endif
                @else
                    Não há contatos ainda...
                @endif
                
                
            </div>
        </div>

        <a href="{{ route("jogos.index") }}" class="adc-jogo">ADICIONAR JOGO</a>

        <form action="{{ route("logout") }}" method="post">
            @csrf
            <button type="submit" class="adc-jogo">Sair</button>
        </form>


    </div>

    @include('sojoga-frontend._partials.footer')
    
@endsection
