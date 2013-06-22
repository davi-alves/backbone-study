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
      this.model.on('destroy', this.remove, this);
    },

    events: {
      'dblclick .edit': 'edit',
      'click .delete': 'destroy'
    },

    edit: function () {
      var newTaskTitle = prompt('Edit Task', this.model.get('title'));
      if(!$.trim(newTaskTitle)) return;

      this.model.set('title', newTaskTitle);
    },

    destroy: function () {
      this.model.destroy();
    },

    remove: function () {
      this.$el.remove();
    },

    render: function () {
      var template = this.template(this.model.toJSON());
      this.$el.html(template);
      return this;
    }
  });

  App.Views.Tasks = Backbone.View.extend({
    tagName: 'ul',

    initialize: function () {
      this.collection.on('add', this.addOne, this);
    },

    render: function () {
      this.collection.each(this.addOne, this);
      return this;
    },

    addOne: function (task) {
      var taskView = new App.Views.Task({model: task});
      return this.$el.append(taskView.render().el);
    }
  });

  App.Views.AddTask = Backbone.View.extend({
    el: '#addTask',

    events: {
      'submit': 'submit'
    },

    submit: function (event) {
      event.preventDefault();
      var input =  $(event.currentTarget).find('input[type=text]');
      var newTaskTitle = input.val();
      input.val('');

      var task = new App.Models.Task({title: newTaskTitle});
      this.collection.add(task);
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

  var addTask = new App.Views.AddTask({collection: tasks});

  $('.lead').append(taskList.render().el);

  return App;
})();
