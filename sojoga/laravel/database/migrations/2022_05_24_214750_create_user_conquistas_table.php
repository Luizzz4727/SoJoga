<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_conquistas', function (Blueprint $table) {
            // $table->unsignedBigInteger('user_id');
            // $table->unsignedBigInteger('conquista_id');

            // $table->foreign('user_id')
            //     ->references('id')
            //     ->on('users')
            //     ->onDelete('cascade');

            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('conquista_id')->constrained()->cascadeOnDelete();

            // $table->foreign('company_id')
            //     ->references('id')
            //     ->on('companies')
            //     ->onDelete('cascade');

            $table->primary(['user_id', 'conquista_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_conquistas');
    }
};
