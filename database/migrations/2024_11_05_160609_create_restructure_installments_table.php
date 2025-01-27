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
        Schema::create('restructure_installments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('loan_id')->references('id')->on('loans')->onDelete('cascade')->onUpdate('cascade');
            $table->decimal('principle_amount', 10, 2);
            $table->date('due_date')->nullable();
            $table->boolean('current')->default(false);
            $table->integer('position')->unsigned()->nullable();
            $table->boolean('for_rollover')->default(false);
            $table->decimal('interest', 10, 2);
            $table->decimal('total', 10, 2);
            $table->decimal('amount_paid', 10, 2)->nullable();
            $table->date('start_date');
            $table->date('last_payment_date')->nullable();
            $table->date('interest_payment_date')->nullable();
            $table->boolean('completed')->default(false);
            $table->boolean('in_arrear')->default(false);
            $table->boolean('being_paid')->default(false);
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
        Schema::dropIfExists('restructure_installments');
    }
};
