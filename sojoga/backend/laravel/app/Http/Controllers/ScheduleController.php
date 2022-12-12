<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetScheduleRequest;
use App\Http\Requests\StoreScheduleRequest;
use App\Models\Notifications;
use App\Models\ScheduleChats;
use App\Models\Schedules;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function index(GetScheduleRequest $request)
    {
        $data = $request->validated();

        $partidas = Schedules::select('schedules.id', 'schedules.date', 'schedules.hour', 'schedules.description')
                            ->where('schedules.chat_id', $data['chat_id'])
                            ->get();

        return $this->success($partidas);

    }

    public function store(StoreScheduleRequest $request)
    {

        $data = $request->validated();
        $data['created_by'] = auth()->user()->id;
        $date = str_replace('/', '-', $data['date']);

        (!isset($data['description'])) ? $data['description'] = NULL : $data['description'] = $data['description'];
        (!isset($data['schedule_id'])) ? $data['schedule_id'] = NULL : $data['schedule_id'] = $data['schedule_id'];

        $schedule = Schedules::updateOrCreate(
        [
            'id' => $data['schedule_id']
        ],
        [
            'created_by' => $data['created_by'],
            'date' => date('Y-m-d', strtotime($date)),
            'hour' => $data['hour'],
            'description' => $data['description'],
            'chat_id' => $data['chat_id']
        ]);


        // if($data['acao'] != 'update-schedule'){
        //     ScheduleChats::create([
        //         'schedule_id' => $schedule->id,
                
        //     ]);
        // }

        // Notifications::create([
        //     'description' => "Uma partida foi criada no grupo {$}"
        // ]);

        return $this->success($schedule);

    }

}
