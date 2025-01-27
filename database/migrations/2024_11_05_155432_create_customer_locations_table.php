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
        Schema::create('customer_locations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->references('id')->on('customers')->onDelete('cascade')->onUpdate('cascade');
            $table->string('postal_address')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('country')->nullable()->default('Kenya');
            $table->foreignId('county_id')->references('id')->on('counties')->onDelete('cascade')->onUpdate('cascade');
            $table->string('constituency');
            $table->string('ward');
            $table->string('physical_address')->nullable();
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->string('business_address')->nullable();
            $table->decimal('business_latitude', 10, 7)->nullable();
            $table->decimal('business_longitude', 10, 7)->nullable();
            $table->string('residence_type')->nullable();
            $table->string('years_lived')->nullable();
            $table->string('home_coordinated')->nullable();
            $table->string('business_coordinated')->nullable();
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
        Schema::dropIfExists('customer_locations');
    }
};
