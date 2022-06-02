<?php

namespace App\Helpers;

class Helper
{
    public static function addSpecialCharacters($value)
    {
        if($value != NULL){
            $value = substr_replace($value, '(', 0, 0);
            $value = substr_replace($value, ')', 3, 0);
            $value = substr_replace($value, ' ', 4, 0);
            $value = substr_replace($value, '-', -4, 0);
        }

        return $value;
    }

    public static function removeSpecialCharacters($value)
    {
        $c = array('(', ')', '-', ' ');
        $value = str_replace($c, "", $value);

        return $value;
    }

}

?>