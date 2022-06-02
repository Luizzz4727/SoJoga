<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>

@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Cadastro')

@section('content')

    @include('sojoga-frontend._partials.header')

    <div class="cadastro">
        <h1>Cadastro</h1>
        <form method="POST" action="{{ route('register') }}">
            @csrf
            <div>
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" value="{{ old('name') }}" required autofocus>
                @error('name')
                    <span class="validacao">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="nickname">Nick:</label>
                <input type="text" id="nickname" name="nickname" value="{{ old('nickname') }}" required>
                @error('nickname')
                    <span class="validacao">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value="{{ old('email') }}" required>
                @error('email')
                    <span class="validacao">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="whatsapp">Whatsapp:</label>
                <input type="text" id="whatsapp" name="whatsapp" placeholder="(00) 00000-0000" value="{{ old('whatsapp') }}">
                @error('whatsapp')
                    <span class="validacao">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="facebook">Facebook:</label>
                <input type="text" id="facebook" name="facebook" placeholder="www.facebook.com/seu_usuario" value="{{ old('facebook') }}">
                @error('facebook')
                    <span class="validacao">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="instagram">Instagram:</label>
                <input type="text" id="instagram" name="instagram" placeholder="www.instagram.com/seu_usuario" value="{{ old('instagram') }}">
                @error('instagram')
                    <span class="validacao">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="twitter">Twitter:</label>
                <input type="text" id="twitter" name="twitter" placeholder="twitter.com/seu_usuario" value="{{ old('twitter') }}">
                @error('twitter')
                    <span class="validacao">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" required>
                @error('password')
                    <span class="validacao">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="confirmPassword">Confirmar Senha:</label>
                <input type="password" id="confirmPassword" name="password_confirmation" required>
                @error('password_confirmation')
                    <span class="validacao">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="butao-registar"><button type="submit">CADASTRAR</button></div>
        </form>
    </div>

    <script type="text/javascript">
        $("#whatsapp").mask("(00) 00000-0000");
    </script>

@endsection
