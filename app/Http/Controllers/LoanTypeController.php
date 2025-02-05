<?php

namespace App\Http\Controllers;

use App\Models\LoanType;
use Illuminate\Http\Request;

class LoanTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $loan_types = LoanType::all();

        if (request()->wantsJson()) {
            return response()->json(['data' => $loan_types], 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LoanType  $loanType
     * @return \Illuminate\Http\Response
     */
    public function show(LoanType $loanType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LoanType  $loanType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LoanType $loanType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LoanType  $loanType
     * @return \Illuminate\Http\Response
     */
    public function destroy(LoanType $loanType)
    {
        //
    }
}
