<?php

use App\Http\Controllers\BranchController;
use App\Http\Controllers\BusinessTypeController;
use App\Http\Controllers\CountyController;
use App\Http\Controllers\LoanTypeController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('products', ProductController::class);
Route::resource('branches', BranchController::class);
Route::resource('loan_types', LoanTypeController::class);
Route::resource('counties', CountyController::class);
Route::resource('business_types', BusinessTypeController::class);
