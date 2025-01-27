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
        Schema::create('msettings', function (Blueprint $table) {
            $table->id();
            $table->string('paybill', 1000)->nullable();
            $table->string('security_credential', 2000)->nullable();
            $table->string('initiator_name', 1000)->nullable();
            $table->string('consumer_key', 1000)->nullable();
            $table->string('consumer_secret', 1000)->nullable();
            $table->string('utility_balance', 1000)->nullable()->default('Utility Account|KES|0.00|0.00|0.00|0.00');
            $table->string('mmf_balance', 1000)->nullable()->default('Utility Account|KES|0.00|0.00|0.00|0.00');
            $table->dateTime('last_updated')->nullable();
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
        Schema::dropIfExists('msettings');
    }
};
