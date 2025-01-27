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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('field_agent_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('branch_id')->references('id')->on('branches')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('document_id')->references('id')->on('documents')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('account_id')->nullable()->references('id')->on('accounts')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('industry_id')->nullable()->references('id')->on('industries')->onDelete('cascade')->onUpdate('cascade');
            $table->string('type')->nullable()->default('individual');
            $table->string('title')->nullable();
            $table->string('fname');
            $table->string('mname');
            $table->string('lname');
            $table->string('email')->nullable();
            $table->string('phone_number');
            $table->string('alternate_phone_number')->nullable();
            $table->string('id_number')->nullable();
            $table->foreignId('guarantor_id')->nullable()->references('id')->on('guarantors')->onDelete('cascade')->onUpdate('cascade');
            $table->string('tax_pin')->nullable();
            $table->string('dob')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('gender')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->boolean('is_employed')->default(false);
            $table->string('employment_status')->nullable();
            $table->string('employment_date')->nullable();
            $table->string('employer')->nullable();
            $table->decimal('prequalified_amount', 10, 2);
            $table->decimal('previous_prequalified_amount', 10, 2)->nullable();
            $table->bigInteger('times_loan_applied')->default(0);
            $table->string('classification')->default('Good');
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
        Schema::dropIfExists('customers');
    }
};
