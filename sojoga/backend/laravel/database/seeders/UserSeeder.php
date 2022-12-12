<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'username' => 'luizao',
            'name' => 'Luiz', 
            'email' => 'luiz@gmail.com',
            'password' => bcrypt('123'),
        ]);
        
        $user->assignRole(1);
    }
}
