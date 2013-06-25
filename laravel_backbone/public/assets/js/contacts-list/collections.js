App.Collections.Contacts = Backbone.Collection.extend({
  model: App.Models.Contact,
  url: '/contacts',
  comparator: function (contact) {
    return contact.get('first_name');
  }
});
