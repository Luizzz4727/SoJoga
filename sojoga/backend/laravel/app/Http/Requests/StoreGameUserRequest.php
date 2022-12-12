<?php

namespace App\Http\Requests;

use App\Models\Games;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class StoreGameUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $gameModel = get_class(new Games());
        
        return [
            'game_id' => "required|exists:{$gameModel},id"
        ];
    }
}
