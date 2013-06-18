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

  App.Models.Person = Backbone.Model.extend({
    dafaults: {
      name: 'Franzé',
      age: 25,
      occupation: 'worker'
    }
  });

  App.Views.Person = Backbone.View.extend({
    tagName: 'li',
    template: template('personTemplate'),
    render: function () {
      this.$el.html( this.template(this.model.toJSON()) );
      return this;
    }
  });

  App.Collections.People = Backbone.Collection.extend({
    model: App.Models.Person
  });

  App.Views.People = Backbone.View.extend({
    tagName: 'ul',
    initialize: function () {
      this.render();
    },
    render: function () {
      this.collection.each(function (person) {
        var personView = new App.Views.Person({model:person});
        this.$el.append(personView.render().el);
      }, this);
      return this;
    }
  });

  var people = new App.Collections.People([
    {
      name: 'Davi',
      age: 24,
      occupation: 'web developer'
    },
    {
      name: 'Renata',
      age: 25,
      occupation: 'marketing'
    },
    {
      name: 'Franzé',
      age: 30,
      occupation: 'waterboy'
    }
  ]);

  var peopleView = new App.Views.People({collection: people});
  $('div.lead').html(peopleView.el);

  return App;
})();
