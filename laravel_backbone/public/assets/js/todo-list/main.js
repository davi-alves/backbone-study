(function () {
  "use strict";

  window.App = {
    Models: {},
    Views: {},
    Collections: {},
    Route: {}
  };

  // Models
  App.Models.Task = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: 0
    },
    initialize: function () {
      this.on('sync', function () {
        console.log(this.toJSON());
      });
    }
  });
  // Collections
  App.Collections.Tasks = Backbone.Collection.extend({
    model: App.Models.Task,
    url: '/tasks'
  });
  // Views
  App.Views.Tasks = Backbone.View.extend({
    tagName: 'ul',

    initialize: function () {
      this.collection.on('add', this.addOne, this);
    },

    render: function () {
      this.$el.empty();
      this.collection.each(this.addOne, this);
      $('#taskList').html(this.el);
      return this;
    },

    addOne: function (task) {
      var taskView = new App.Views.Task({model: task});
      this.$el.append(taskView.render().el);
    }
  });

  App.Views.Task = Backbone.View.extend({
    tagName: 'li',

    initialize: function () {
      this.model.on('destroy', this.remove, this);
    },

    render: function () {
      this.$el.html(this.model.get('title'));
      return this;
    }
  });

  window.tasks = new App.Collections.Tasks();
  tasks.fetch().then(function () {
    new App.Views.Tasks({collection: tasks}).render();
  });

  return App;
})();
