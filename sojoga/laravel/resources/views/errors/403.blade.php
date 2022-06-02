@extends('errors::minimal')
{{-- <link rel="icon" href="{{ url('imgs/logo.jpg') }}"> --}}
@section('title', __('Proibído'))
@section('code', '403')
@section('message', __('Você não tem permissão para acessar esta página!'))
