<?php

namespace App\Http\Controllers;

use App\Models\Notifications;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(){
        $user = auth()->user()->id;

        $notifications = Notifications::select('notifications.description')
                       ->join('notification_users', 'notifications.id', '=', 'notification_users.notification_id')
                       ->where('notification_users.user_id', $user)
                       ->get();

        return $this->success($notifications);

    }
}
