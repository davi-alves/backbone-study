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

  App.Collections.Tasks = Backbone.Collection.extend({
    model: App.Models.Task
  });

  App.Views.Task = Backbone.View.extend({
    tagName: 'li',

    template: template('taskTemplate'),

    initialize: function () {
      this.model.on('change:title', this.render, this);
    },

    events: {
      'dblclick span.edit': 'editTask'
    },

    editTask: function () {
      var newTaskTitle = prompt('Edit Task', this.model.get('title'));
      if(!$.trim(newTaskTitle)) return;

      this.model.set('title', newTaskTitle);
    },

    render: function () {
      var template = this.template(this.model.toJSON());
      this.$el.html(template);
      return this;
    }
  });

  App.Views.Tasks = Backbone.View.extend({
    tagName: 'ul',

    render: function () {
      this.collection.each(this.addOne, this);
      return this;
    },

    addOne: function (task) {
      var taskView = new App.Views.Task({model: task});
      return this.$el.append(taskView.render().el);
    }
  });

  var tasks = new App.Collections.Tasks([
    {
      title: 'Go to store',
      priority: 4
    },
    {
      title: 'Buy Milk',
      priority: 2
    },
    {
      title: 'Buy Beer',
      priority: 5
    }
  ]);

  var taskList = new App.Views.Tasks({collection:tasks});

  $('.lead').html(taskList.render().el);

  return App;
})();
