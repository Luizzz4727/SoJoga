<footer>
    <div>
        <a href="{{ route('home') }}" class="img-footer"><img src="{{ asset('src/img/home-footer.svg') }}"></a>
        <a href="{{ route('jogadores.index') }}" class="img-footer"><img src="{{ asset('src/img/group.svg') }}"></a>
        <a href="{{ route('users.show', $userLogadoId ?? 0) }}" class="img-footer"><img src="{{ asset('src/img/perfil.svg') }}"></a>
        {{-- <a href="#" class="img-footer"><img src="src/img/message.svg"></a> --}}
    </div>
</footer>