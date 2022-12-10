<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScheduleChats extends Model
{
    use HasFactory;

    protected $fillable = [
        'schedule_id',
        'chat_id'
    ];

}