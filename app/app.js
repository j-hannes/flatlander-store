/* global angular */

(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
    this.product = gem;
  });

  var gem = {
    name: 'Dodecahedron 2',
    price: 2.95,
    description: '. . .'
  };
})();

