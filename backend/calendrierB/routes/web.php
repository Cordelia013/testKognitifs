<?php

use Illuminate\Support\Facades\Route;
use Spatie\GoogleCalendar\Event;
use App\Http\Controllers\FullCalendarEventMasterController;


Route::get('/', function()
{
    $event = new Event;

    $event->title = 'testing application';
    $event->start = Carbon\Carbon::now();
    $event->end = Carbon\Carbon::now()->addDay();
    
    $event->save();

    $e= Event::get();
    dd($e);
});

// Route::ressource('calendar',FullCalendarEventMasterController::class);

//fullcalender
Route::get('/',[FullCalendarEventMasterController::class,'index']);

Route::post('/fullcalendareventmaster/create',[FullCalendarEventMasterController::class,'create']);

Route::post('/fullcalendareventmaster/update',[FullCalendarEventMasterController::class,'update']);

Route::post('/fullcalendareventmaster/delete',[FullCalendarEventMasterController::class,'destroy']);