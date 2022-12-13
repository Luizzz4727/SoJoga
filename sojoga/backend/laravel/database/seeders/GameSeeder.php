<?php

namespace Database\Seeders;

use App\Models\Games;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $games = [
            [
                "name" => "League of Legends",
                "path_image" => '../../assets/images/logo-fortnite.png'
            ],
            [
                "name" => "Fortnite",
                "path_image" => '../../assets/images/logo-fortnite.png'
            ],
            [
                "name" => "Valorant",
                "path_image" => '../../assets/images/logo-fortnite.png'
            ],
            [
                "name" => "Minecraft",
                "path_image" => '../../assets/images/logo-fortnite.png'
            ]
        ];

        foreach($games as $game){
            Games::create([
                'name' => $game["name"],
                'path_image' => $game["path_image"]
            ]);
        }
    }
}
