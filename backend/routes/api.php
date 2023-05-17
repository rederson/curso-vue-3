<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/users', function() {
    return User::paginate(10);
});

//rota da consulta
Route::get('/users/search', function(Request $request) {
    $user = $request->input('user');

    return User::where('firstName', 'LIKE', '%'.$user.'%')->paginate(1);
});


Route::post('/user', function(Request $request) {
    //return User::all();
    $request->validate([
        'firstName' => 'required',
        'lastName' => 'required',
        'email' => 'required|unique:users',
        'password' => 'required',
    ],[
        'firstName.required' => 'O campo nome é obrigatório',
        'lastName.required' => 'O campo sobrenome é obrigatório',
        'email.unique' => 'Este email já foi cadastrado',
        'password.required' => 'A senha é obrigatória',
    ]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
