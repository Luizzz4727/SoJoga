<?php

namespace App\Http\Requests;

use App\Models\Chat;
use App\Models\Schedules;
use Illuminate\Foundation\Http\FormRequest;

class StoreScheduleRequest extends FormRequest
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

        $chatModel = get_class(new Chat());
        $scheduleModel = get_class(new Schedules());
        $todayDate = date('d/m/Y');
        $todayTime = date('H:i', strtotime('3 hour'));

        return [
            'schedule_id' => "required_if:acao,==,update-schedule|exists:{$scheduleModel},id",
            'chat_id' => "required|exists:{$chatModel},id",
            'date' => 'date_format:d/m/Y|after_or_equal:'.$todayDate,
            'hour' => 'date_format:H:i',
            // 'hour' => 'date_format:H:i|after:'.$todayTime,
            'description' => 'nullable|string',
            'acao' => 'required'
        ];
    }
}
