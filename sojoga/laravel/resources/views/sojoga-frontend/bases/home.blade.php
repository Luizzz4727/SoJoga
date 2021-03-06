@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Adicionar Jogo')

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
                <div class="btn-cadastrar"><a href="#">CADASTRAR</a></div>
            </div>
        </div>
        <div class="login">
            <p>Já possui conta? Então entre abaixo:</p>
            <form>
                <input type="email" id="email" name="email" placeholder="Email">
                <input type="password" id="password" name="password" placeholder="Senha">
                <button>ENTRAR</button>
            </form>
        </div>
    </div>

@endsection
