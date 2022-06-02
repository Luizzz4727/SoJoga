@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Entrar')

@section('content')

    <div class="home">
        <div class="txt-home">
            <div class="fundo"></div>
            <h1>Sem amigos para jogar?</h1>
            <div class="content-txt-home">
                <h2>SEM PROBLEMAS!</h2>
                <p>
                    Nós temos a solução, aqui você achará seu parceiro ideal para suas gamaplays.
                    Aqui tem pessoas de varios estilos e que jogam games diferentes.
                    <br />
                    Entre, cadastre-se e conheça nossa rede!
                </p>
                <div class="btn-cadastrar"><a href="{{ route('register') }}">CADASTRAR</a></div>
            </div>
        </div>
        <div class="login">
            <p>Já possui conta? Então entre abaixo:</p>
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <input type="email" id="email" name="email" placeholder="Email" value="{{ old('email') }}">
                {{-- <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" required autocomplete="email" autofocus> --}}

                @error('email')
                    <span>
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
                
                {{-- <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password"> --}}
                <input type="password" id="password" name="password" placeholder="Senha">
                
                @error('password')
                    <span>
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror

                <button type="submit">ENTRAR</button>
            </form>
        </div>
    </div>

@endsection
