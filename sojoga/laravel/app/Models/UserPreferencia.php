<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPreferencia extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'preferencia_id'
    ];

}
