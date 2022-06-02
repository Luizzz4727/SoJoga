<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>

<style>
    .toast-top-right {
        text-shadow: 0px 0px 10px #000;
        top: 70px;
        bottom: auto;
    }

</style>

@if ($message = Session::get('success'))
@endif

@extends('sojoga-frontend.layouts.app')

@section('title', 'SoJoga - Adicionar Jogo')

@section('content')

    @include('sojoga-frontend._partials.header')

    <div class="adicionar-jogo">
        <div class="img-adc-jogo"><img src="{{ asset('src/img/controle.svg') }}"></div>
        <h1>Adicionar Jogo</h1>
        <form method="POST" action="{{ route('jogos.store') }}">
            @csrf
            <div class="select-adc-jogo">
                <select name="preferencia">
                    <option disabled selected>Escolha um Jogo</option>
                    @foreach ($jogos as $jogo)
                        <option value="{{ $jogo['id'] }}">{{ $jogo['name'] }}</option>
                    @endforeach
                </select>
            </div>
            <button class="adc-jogo">ADICIONAR JOGO</button>
        </form>
    </div>

    @include('sojoga-frontend._partials.footer')

    <script type="text/javascript">
        var myvar = '<?php echo $message; ?>';
        if (myvar != '')
            switch (myvar) {

                case "Este jogo já foi adicionado.":
                    toastr.info(myvar)
                    break;

                case "Escolha uma opção!":
                    toastr.error(myvar)
                    break;

                default:
                    toastr.success(myvar)
                    break;
            }
    </script>

@endsection

