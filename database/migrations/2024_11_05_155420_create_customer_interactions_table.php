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
        Schema::create('customer_interactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->references('id')->on('customers')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('interaction_type_id')->references('id')->on('customer_interaction_types')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('interaction_category_id')->references('id')->on('customer_interaction_categories')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('closed_by')->nullable()->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->longText('remark')->nullable();
            $table->date('next_scheduled_interaction')->nullable();
            $table->integer('status')->unsigned()->default(1);
            $table->boolean('followed_up')->default(false);
            $table->integer('target')->default(2);
            $table->dateTime('closed_date')->nullable();
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
        Schema::dropIfExists('customer_interactions');
    }
};
