@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Adicionar Jogo')

@section('content')

    @include('sojoga-frontend._partials.header')
    
    <div class="cadastro">
        <h1>Cadastro</h1>
        <form>
            <div>
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name">
            </div>
            <div>
                <label for="nickname">Nick:</label>
                <input type="text" id="nickname" name="nickname">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
            </div>
            <div>
                <label for="whatsapp">Whatsapp:</label>
                <input type="text" id="whatsapp" name="whatsapp" placeholder="wa.me/5511912345678">
            </div>
            <div>
                <label for="facebook">Facebook:</label>
                <input type="text" id="facebook" name="facebook" placeholder="www.facebook.com/seu_usuario">
            </div>
            <div>
                <label for="instagram">Instagram:</label>
                <input type="text" id="instagram" name="instagram" placeholder="www.instagram.com/seu_usuario">
            </div>
            <div>
                <label for="twitter">Twitter:</label>
                <input type="text" id="twitter" name="twitter" placeholder="twitter.com/seu_usuario">
            </div>
            <div>
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password">
            </div>
            <div>
                <label for="confirmPassword">Confirmar Senha:</label>
                <input type="password" id="confirmPassword" name="confirmPassword">
            </div>
        </form>
        <button>CADASTRAR</button>
    </div>

    @include('sojoga-frontend._partials.footer')

@endsection
