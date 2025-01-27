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
        Schema::create('raw_payments', function (Blueprint $table) {
            $table->id();
            $table->string('amount');
            $table->string('mpesa_receipt_number');
            $table->string('customer');
            $table->string('phone_number');
            $table->string('business_short_code');
            $table->string('account_number');
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
        Schema::dropIfExists('raw_payments');
    }
};
