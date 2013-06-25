@extends('layouts/frontend/master')

@section('content')
  <h3>Contact List</h3>
  <div class="module">
    <h4>New Contact</h4>
    <form action="" id="addContact" class="form-horizontal">
      <div class="control-group">
        <label class="control-label" for="first_name">First Name</label>
        <div class="controls">
          <input type="text" id="first_name" name="first_name">
        </div>
      </div>

      <div class="control-group">
        <label class="control-label" for="last_name">Last Name</label>
        <div class="controls">
          <input type="text" id="last_name" name="last_name">
        </div>
      </div>

      <div class="control-group">
        <label class="control-label" for="email_address">Email Address</label>
        <div class="controls">
          <input type="text" id="email_address" name="email_address">
        </div>
      </div>

      <div class="control-group">
        <label class="control-label" for="description">Description</label>
        <div class="controls">
          <textarea id="description" name="description"></textarea>
        </div>
      </div>

      <div class="control-group">
        <div class="controls">
          <button type="submit" class="btn btn-success btn-large">Add</button>
        </div>
      </div>
    </form>
  </div>

  <div class="module">
    <table class="table table-hover" id="contactsList">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Description</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>

  <div class="module" id="edit"></div>
@stop

@section('javascript')
  @parent

  <script id="allContactsTemplate" type="text/template">
    <td><%= id %></td>
    <td><%= first_name %></td>
    <td><%= last_name %></td>
    <td><%= email_address %></td>
    <td><%= description %></td>
    <td>
      <a href="#/contacts/<%= id %>/edit" class="btn btn-small btn-primary edit">Edit</a>
      <a href="#/contacts/<%= id %>" class="btn btn-small btn-danger delete">Delete</a>
    </td>
  </script>

  <script id="editContactTemplate" type="text/template">
    <h4>Edit Contact: <%= first_name %> <%= last_name %></h4>
    <form action="" id="editContact" class="form-horizontal">
      <div class="control-group">
        <label class="control-label" for="edit_first_name">First Name</label>
        <div class="controls">
          <input type="text" id="edit_first_name" name="edit_first_name" value="<%= first_name %>">
        </div>
      </div>

      <div class="control-group">
        <label class="control-label" for="edit_last_name">Last Name</label>
        <div class="controls">
          <input type="text" id="edit_last_name" name="edit_last_name" value="<%= last_name %>">
        </div>
      </div>

      <div class="control-group">
        <label class="control-label" for="edit_email_address">Email Address</label>
        <div class="controls">
          <input type="text" id="edit_email_address" name="edit_email_address" value="<%= email_address %>">
        </div>
      </div>

      <div class="control-group">
        <label class="control-label" for="edit_description">Description</label>
        <div class="controls">
          <textarea id="edit_description" name="edit_description"><%= description %></textarea>
        </div>
      </div>

      <div class="control-group">
        <div class="controls">
          <button type="submit" class="btn btn-success btn-large">Save</button>
          <button type="button" class="btn cancel">Cancel</button>
        </div>
      </div>
    </form>
  </script>

  {{ HTML::script('assets/js/libs/underscore.js') }}
  {{ HTML::script('assets/js/libs/backbone.js') }}
  {{ HTML::script('assets/js/contacts-list/main.js') }}
  {{ HTML::script('assets/js/contacts-list/models.js') }}
  {{ HTML::script('assets/js/contacts-list/collections.js') }}
  {{ HTML::script('assets/js/contacts-list/views.js') }}
  {{ HTML::script('assets/js/contacts-list/router.js') }}

  <script>
    new App.Router;
    Backbone.history.start();

    App.contacts = new App.Collections.Contacts;
    App.contacts.fetch().then(function () {
      new App.Views.App({ collection: App.contacts });
    })
  </script>
@stop
