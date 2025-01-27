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
        Schema::create('mpesa_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('loan_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->string('result_code')->nullable();
            $table->string('result_desc')->nullable();
            $table->string('originator_conversation_id')->nullable();
            $table->string('conversation_id')->nullable();
            $table->string('transaction_id')->nullable();
            $table->string('transaction_amount')->nullable();
            $table->string('transaction_receipt')->nullable();
            $table->string('b2c_receipient_is_registered_customer')->nullable();
            $table->string('b2c_charges_paid_account_available_funds')->nullable();
            $table->string('receiver_party_public_name')->nullable();
            $table->string('transaction_completion_date_time')->nullable();
            $table->string('b2c_account_available_funds')->nullable();
            $table->string('b2c_working_account_available_funds')->nullable();
            $table->boolean('status')->default(false);
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
        Schema::dropIfExists('mpesa_transactions');
    }
};
