var app = angular.module('shop', ['ngRoute']);

angular.
  module('shop').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<product-list class="row"></product-list>'
        }).
        when('/product/:product_id', {
          template: '<product class="row"></product>'
        }).
        otherwise('/');
    }
  ]);