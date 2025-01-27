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
        Schema::create('prequalified_amount_adjustments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->references('id')->on('customers')->onDelete('cascade')->onUpdate('cascade');
            $table->decimal('initial_amount', 10, 2);
            $table->decimal('proposed_amount', 10, 2);
            $table->boolean('status')->default(false);
            $table->boolean('approved')->default(false);
            $table->foreignId('initiated_by')->nullable()->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('approved_by')->nullable()->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamp('approved_at')->nullable();
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
        Schema::dropIfExists('prequalified_amount_adjustments');
    }
};
