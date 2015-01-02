window.$ = require('jquery');
window._ = require("underscore")
window.Backbone = require('backbone');
window.bluebird = require("bluebird");
Backbone.$ = $;

var PaisesController = require("./PaisesController.js");
var PaisesView = require("./PaisesView.js");
var paises = new PaisesController();


paises.fetch()
      .then(function(data){
        data.forEach(function(pais){
          var view = new PaisesView({model:pais})
          view.render();
          view.$el.appendTo("#paises");
        });
      });
