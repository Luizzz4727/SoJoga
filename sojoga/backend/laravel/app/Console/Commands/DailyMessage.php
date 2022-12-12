<?php

namespace App\Console\Commands;

use App\Models\Notifications;
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
        Notifications::create(['description' => "oiii"]);
    }
}
