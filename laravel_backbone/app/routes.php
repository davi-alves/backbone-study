<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/** HOME */
Route::get('/', function() {
    //return View::make('hello');
    // return View::make('todo-list');
    return View::make('contacts-list');
});

Route::resource('tasks', 'TasksController');

Route::resource('contacts', 'ContactsController');
