<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>

@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Editar Jogador')

@section('content')

    @include('sojoga-frontend._partials.header')

    <div class="cadastro">
        <h1>Editar Perfil</h1>
        <form method="POST" action="{{ route('users.update', $id) }}">
            @method('put')
            @csrf
            <div>
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" value="{{ old('name') ?? $user->name }}" required>
                @error('name')
                    <span>
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="nickname">Nick:</label>
                <input type="text" id="nickname" name="nickname" value="{{ old('nickname') ?? $user->nickname }}" required>
                @error('nickname')
                    <span>
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value="{{ old('email') ?? $user->email }}" required>
                @error('email')
                    <span>
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="whatsapp">Whatsapp:</label>
                <input type="text" id="whatsapp" name="whatsapp" placeholder="(00) 00000-0000" value="{{ old('whatsapp') ?? $user->whatsapp }}">
                @error('whatsapp')
                    <span>
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="facebook">Facebook:</label>
                <input type="text" id="facebook" name="facebook" placeholder="www.facebook.com/seu_usuario" value="{{ old('facebook') ?? $user->facebook }}">
                @error('facebook')
                    <span>
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="instagram">Instagram:</label>
                <input type="text" id="instagram" name="instagram" placeholder="www.instagram.com/seu_usuario" value="{{ old('instagram') ?? $user->instagram }}">
                @error('instagram')
                    <span>
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="twitter">Twitter:</label>
                <input type="text" id="twitter" name="twitter" placeholder="twitter.com/seu_usuario" value="{{ old('twitter') ?? $user->twitter }}">
                @error('twitter')
                    <span>
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password">
                @error('password')
                    <span>
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div>
                <label for="confirmPassword">Confirmar Senha:</label>
                <input type="password" id="confirmPassword" name="confirmPassword">
            </div>
            <button type="submit">SALVAR</button>
        </form>
    </div>

    @include('sojoga-frontend._partials.footer')

    <script type="text/javascript">
        $("#whatsapp").mask("(00) 00000-0000");
    </script>

@endsection
