App.Models.Contact = Backbone.Model.extend({
  validate: function (attrs) {
    if (! attrs.first_name || ! attrs.last_name) {
      return 'First name and Last name are required';
    }
    if (! attrs.email_address) {
      return 'Email address is required';
    }
  }
});
