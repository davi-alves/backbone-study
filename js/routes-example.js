(function () {
  // Application namespaces
  window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
  };
  // helper
  window.template = function (id) {
    return _.template($('#' + id).html());
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'show/:id': 'show',
      'download/:id/*filename': 'download',
      '*other': 'default'
    },

    index: function () {
      console.log('index');
    },

    show: function (id) {
      console.log('show route with id:' + id);
    },

    download: function (id, filename) {
      console.log('download route with id:' + id + ' and file:' + filename);
    },

    default: function (other) {
      console.log('A rota "' + other + '" não existe');
    }

  });

  new App.Router();
  Backbone.history.start();

  return App;
})();
