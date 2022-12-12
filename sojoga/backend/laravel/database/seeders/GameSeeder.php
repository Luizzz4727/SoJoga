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
                "path_image" => null
            ],
            [
                "name" => "Fortnite",
                "path_image" => null
            ],
            [
                "name" => "Valorant",
                "path_image" => null
            ],
            [
                "name" => "Minecraft",
                "path_image" => null
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
