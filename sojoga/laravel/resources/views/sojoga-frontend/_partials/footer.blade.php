<footer>
    <div>
        <a href="{{ route('home') }}" class="img-footer"><img src="{{ asset('src/img/home-footer.svg') }}"></a>
        <a href="{{ route('pesquisar-jogadores.index') }}" class="img-footer"><img src="{{ asset('src/img/group.svg') }}"></a>
        <a href="{{ route('users.show', $id) }}" class="img-footer"><img src="{{ asset('src/img/perfil.svg') }}"></a>
        {{-- <a href="#" class="img-footer"><img src="src/img/message.svg"></a> --}}
    </div>
</footer>