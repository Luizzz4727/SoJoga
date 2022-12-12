<?php

namespace App\Http\Requests;

use App\Models\Chat;
use App\Models\Games;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class StoreChatRequest extends FormRequest
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
        $userModel = get_class(new User());
        $gameModel = get_class(new Games());
        $chatModel = get_class(new Chat());
        
        return [
            'chat_id' => "required_if:acao,==,update-chat|exists:{$chatModel},id",
            'user_id' => "required_if:is_private,==,1|exists:{$userModel},id",
            'game_id' => "required_if:is_private,==,0|exists:{$gameModel},id",
            'name' => 'required',
            'is_private' => 'required|boolean',
            'acao' => 'required'
        ];
    }
}
