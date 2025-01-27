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
        Schema::create('mrequests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('loan_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->string('conversation_id')->nullable();
            $table->string('originator_conversation_id')->nullable();
            $table->string('response_code')->nullable();
            $table->string('response_description')->nullable();
            $table->boolean('settled')->default(false);
            $table->integer('requested_by')->nullable();
            $table->string('disburse_loan_ip')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mrequests');
    }
};
