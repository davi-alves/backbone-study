@extends('layouts/frontend/master')

@section('content')
  <h3>Task List</h3>
  <div id="taskList"></div>
@stop

@section('javascript')
  @parent
  {{ HTML::script('assets/js/libs/underscore.js') }}
  {{ HTML::script('assets/js/libs/backbone.js') }}
  {{ HTML::script('assets/js/todo-list/main.js') }}
@stop
