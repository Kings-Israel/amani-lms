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
        Schema::create('loans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->references('id')->on('customers')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('product_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('group_id')->nullable()->references('id')->on('groups')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('loan_type_id')->references('id')->on('loan_types')->onDelete('cascade')->onUpdate('cascade');
            $table->string('account');
            $table->decimal('amount', 10, 2);
            $table->boolean('approved')->default(false);
            $table->dateTime('approved_date')->nullable();
            $table->boolean('disbursed')->default(false);
            $table->dateTime('disbursed_date')->nullable();
            $table->text('purpose')->nullable();
            $table->string('document_path')->nullable();
            $table->string('customer_id_front')->nullable();
            $table->string('customer_id_back')->nullable();
            $table->string('guarantor_id')->nullable();
            $table->boolean('settled')->default(false);
            $table->boolean('rolled_over')->default(false);
            $table->foreignId('created_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('approved_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('disbursed_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('last_edited_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->boolean('restructured')->default(false);
            $table->boolean('has_lp_fee')->default(false);
            $table->boolean('self_application')->default(false);
            $table->decimal('total_amount', 10, 2);
            $table->decimal('total_amount_paid', 10, 2);
            $table->string('create_loan_ip')->nullable();
            $table->string('approve_loan_ip')->nullable();
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
        Schema::dropIfExists('loans');
    }
};
