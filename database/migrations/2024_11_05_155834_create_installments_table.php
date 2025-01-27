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
        Schema::create('installments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('loan_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->decimal('principle_amount', 10, 2);
            $table->date('due_date');
            $table->boolean('current')->default(false);
            $table->integer('position')->unsigned();
            $table->boolean('for_rollover')->default(false);
            $table->decimal('interest', 10, 2);
            $table->decimal('lp_fee', 10, 2)->nullable();
            $table->decimal('total', 10, 2)->nullable();
            $table->decimal('amount_paid', 10, 2)->nullable();
            $table->date('start_date');
            $table->date('last_payment_date')->nullable();
            $table->boolean('completed')->default(false);
            $table->boolean('in_arrear')->default(false);
            $table->boolean('being_paid')->default(false);
            $table->date('interest_payment_date')->nullable();
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
        Schema::dropIfExists('installments');
    }
};
