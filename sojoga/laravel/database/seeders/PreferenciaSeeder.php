<?php

namespace Database\Seeders;

use App\Models\Preferencia;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PreferenciaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $preferencias = [
            [
                'name' => 'League of Legends',
                'img' => 'src/img/lol.svg'
            ],

            [
                'name' => 'Fortnite',
                'img' => 'src/img/fort.svg'
            ],

            [
                'name' => 'Valorant',
                'img' => 'src/img/valorant.svg'
            ]

        ];

        foreach ($preferencias as $preferencia) {
            Preferencia::create([
                'name' => $preferencia['name'],
                'img' => $preferencia['img']
            ]);
        }
    }
}
