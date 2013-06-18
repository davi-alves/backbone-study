(function () {
  // Application namespaces
  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };
  // helper
  window.template = function (id) {
    return _.template($('#' + id).html());
  };

  App.Models.Task = Backbone.Model.extend({});

  App.Views.Task = Backbone.View.extend({
    tagName: 'li',
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html( this.model.get('title'));
      return this;
    }
  });

  var task = new App.Models.Task({
    title: 'Go to store',
    priority: 4
  });

  var taskView = new App.Views.Task({model:task});

  $('div.lead').html(taskView.el);

  return App;
})();
