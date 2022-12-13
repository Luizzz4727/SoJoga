<?php

namespace App\Console\Commands;

use App\Models\Chat;
use App\Models\ChatParticipant;
use App\Models\Notifications;
use App\Models\NotificationUsers;
use App\Models\Schedules;
use DateTime;
use Illuminate\Console\Command;

class DailyMessage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'message:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Artisan command to send daily messages';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $notifications = Notifications::where('is_sent', 1)->get();

        foreach($notifications as $notification){
            if($schedule = Schedules::find($notification->schedule_id)){
                
                $data_inicio = new DateTime(date('Y-m-d H:i'));
                $data_fim = new DateTime("$schedule->date $schedule->hour");

                $dateInterval = $data_inicio->diff($data_fim);
                $timeRestante = $dateInterval->format("%H:%I");
                $daysRestante = $dateInterval->format("%a");


                if($timeRestante <= "00:30" && $daysRestante == "0"){

                    $group = Chat::find($schedule->chat_id);
                    $participants = ChatParticipant::select('user_id')->where('chat_id', $schedule->chat_id)->get();

                    $notification->is_sent = NULL;
                    $notification->save();
                    
                    $notification = Notifications::create([
                        'description' => "A partida do grupo \"$group->name\" começará em menos de 30 minutos.",
                        'schedule_id' => $schedule->id,
                    ]);

                    foreach($participants as $participant){
                        NotificationUsers::create([
                            'notification_id' => $notification->id,
                            'user_id' => $participant->user_id
                        ]);
                    }
                }
            }
        }


        $notifications = Notifications::all();

        foreach($notifications as $notification){

                $data_inicio = new DateTime("$notification->created_at");
                $data_fim = new DateTime(date('Y-m-d H:i'));
                
                $dateInterval = $data_inicio->diff($data_fim);
                $timeRestante = $dateInterval->format("%H:%I");
                $daysRestante = $dateInterval->format("%a");


                if($daysRestante >= "3"){

                    Notifications::where('id', $notification->id)->delete();

                }
        }


    }
}
