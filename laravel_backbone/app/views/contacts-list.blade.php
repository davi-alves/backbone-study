@extends('layouts/frontend/master')

@section('content')
  <h3>Task List</h3>
  <div id="taskList"></div>
@stop

@section('javascript')
  @parent
  {{ HTML::script('assets/js/libs/underscore.js') }}
  {{ HTML::script('assets/js/libs/backbone.js') }}
  {{ HTML::script('assets/js/main.js') }}
  {{ HTML::script('assets/js/models.js') }}
  {{ HTML::script('assets/js/collections.js') }}
  {{ HTML::script('assets/js/views.js') }}
  {{ HTML::script('assets/js/router.js') }}
@stop
