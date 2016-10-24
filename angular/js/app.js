var app = angular.module('shop', ['ngRoute']);

angular.module('shop')
      .config(["$locationProvider", "$routeProvider",
        function conf($locationProvider, $routeProvider){
          $locationProvider.hashPrefix('!');


          $routeProvider.when('/',{
            templateUrl: 'views/layout-index.html'
          }).when('/product', {
            template: "Producto"
          }).otherwise('/');
        }]);