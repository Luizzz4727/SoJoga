<?php

namespace App\Helpers;

class Helper
{
    public static function geraResponse($status, $body, $nome_do_conteudo='', $conteudo='') {
        $response['status'] = $status;
        $response['mensagem'] = $body;

        if(!empty($nome_do_conteudo) && !empty($conteudo)){
            $response[$nome_do_conteudo] = $conteudo;
        }

        return response()->json($response, $status);
    }
}

?>