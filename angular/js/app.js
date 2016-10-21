var app = angular.module('shop', ['ngRoute']);

angular.module('shop')
      .config(["$locationProvider", "$routeProvider",
        function conf($locationProvider, $routeProvider){
          $locationProvider.hashPrefix('!');

          $routeProvider.when('/',{
            templateUrl: "Hola"
          }).when('/product', {
            template: "Producto"
          }).otherwise('/');
        }]);