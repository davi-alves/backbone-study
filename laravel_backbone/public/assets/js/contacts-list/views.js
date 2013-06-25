App.Views.App = Backbone.View.extend({
  initialize: function () {
    //- initialize views
    new App.Views.AddContact({ collection: App.contacts });
    new App.Views.Contacts({ collection: App.contacts }).render();
    //- events
    vent.on('contact:edit', this.editContact, this);
  },

  editContact: function (contact) {
    $('#edit').html(new App.Views.EditContact({model: contact}).el);
  }
});

/*
|-----------------------------------------------------------------------
| Add Contact
|-----------------------------------------------------------------------
 */
App.Views.AddContact = Backbone.View.extend({
  el: '#addContact',

  initialize: function () {
    this.first_name = $('#first_name');
    this.last_name = $('#last_name');
    this.email_address = $('#email_address');
    this.description = $('#description');
  },

  events: {
    'submit': 'addContact'
  },

  addContact: function (event) {
    event.preventDefault();
    this.collection.create({
      first_name: this.first_name.val(),
      last_name: this.last_name.val(),
      email_address: this.email_address.val(),
      description: this.description.val()
    }, {wait: true});

    this.clearForm();
    vent.trigger('contacts:sort');
  },

  clearForm: function () {
    this.first_name.val('');
    this.last_name.val('');
    this.email_address.val('');
    this.description.val('');
  }
});

/*
|-----------------------------------------------------------------------
| Edit Contact
|-----------------------------------------------------------------------
 */
App.Views.EditContact = Backbone.View.extend({
  template: template('editContactTemplate'),

  initialize: function () {
    this.render();
    this.form = this.$('form');
    this.first_name = this.form.find('#edit_first_name');
    this.last_name = this.form.find('#edit_last_name');
    this.email_address = this.form.find('#edit_email_address');
    this.description = this.form.find('#edit_description');
  },

  events: {
    'submit form': 'submit',
    'click .cancel': 'cancel'
  },

  submit: function (event) {
    event.preventDefault();

    this.model.save({
      first_name: this.first_name.val(),
      last_name: this.last_name.val(),
      email_address: this.email_address.val(),
      description: this.description.val()
    });

    this.remove();
  },

  cancel: function () {
    this.remove();
  },

  render: function () {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});


/*
|-----------------------------------------------------------------------
| All Contacts View
|-----------------------------------------------------------------------
 */
App.Views.Contacts = Backbone.View.extend({
  el: '#contactsList tbody',

  initialize: function () {
    this.collection.on('add', this.addOne, this);
  },

  render: function () {
    this.collection.sort();
    this.collection.each(this.addOne, this);
  },

  addOne: function (contact) {
    this.$el.append(new App.Views.Contact({model: contact}).render().el);

    return this;
  }
});

/*
|-----------------------------------------------------------------------
| Single Contact View
|-----------------------------------------------------------------------
 */
App.Views.Contact = Backbone.View.extend({
  tagName: 'tr',

  template: template('allContactsTemplate'),

  initialize: function () {
    this.model.on('destroy', this.remove, this);
    this.model.on('change', this.render, this);
  },

  events: {
    'click .delete': 'deleteContact',
    'click .edit': 'editContact'
  },

  deleteContact: function (event) {
    event.preventDefault();
    this.model.destroy();
  },

  editContact: function (event) {
    event.preventDefault();
    vent.trigger('contact:edit', this.model);
  },

  render: function () {
    this.$el.html( this.template(this.model.toJSON()) );

    return this;
  }
});
