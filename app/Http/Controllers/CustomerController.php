<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type' => ['required'],
            'title' => ['required'],
            'first_name' => ['required'],
            'last_name' => ['required'],
            'relationship_officer' => ['required'],
            'supervisor' => ['required'],
            'supervisor' => ['required'],
            'phone_number' => ['required'],
            'id_number' => ['required'],
            'country' => ['required'],
            'county' => ['required'],
            'constituency' => ['required'],
            'ward' => ['required'],
            'loan_amount' => ['required'],
            'product_id' => ['required'],
            'installments' => ['required'],
            'loan_type' => ['required'],
        ], [
            'product_id.required' => 'Select a loan product',
            'installments.required' => 'Select a loan product',
            'loan_type.required' => 'Select a loan repayment type',
            'loan_amount.required' => 'Select a loan amount',
        ]);


        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        $phone_number = '254' . substr($request->phone_number, -9);

        $customer = Customer::where('phone', $phone_number)->first();

        if ($customer) {
            return response()->json(['customer' => 'The customer already exists in the system'], 422);
        }

        // personal
        $customer = [
            "type" => $request->customer_type,
            "title" => $request->customer_title,
            "fname" => $request->first_name,
            "mname" => $request->middle_name,
            "lname" => $request->last_name,
            "field_agent_id" => $request->relationship_officer_id,
            // "supervisor_id" => $request->supervisor['value'],
            // "supervisor" => $request->supervisor['value'],
            // "guarantor_id" => $request->guarantor['value'] ?? null,
            "phone" => $phone_number,
            "email" => $request->email,
            "document_id" => 1,
            "id_no" => $request->id_number,
            "branch_id" => User::find($request->relationship_officer['value'])->branch_id ?? Auth::user()->branch_id,
            "prequalified_amount" => $request->loan_amount['label'],
            "alternate_phone" => '254' . substr($request->alternate_phone_number, -9),
            // "business_type_id" => $request->business_type != '' ? $request->business_type['value'] : NULL,
            "business_type_id" => isset($request->business_type['value']) ? $request->business_type['value'] : NULL,
        ];

        $customerLocation = [
            "country" => $request->country,
            "county_id" => $request->county_id,
            "constituency" => $request->constituency,
            "ward" => $request->ward,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        //
    }
}
