var app = angular.module('shop', ['ngRoute']);

angular.module('shop')
      .config(["$locationProvider", "$routeProvider",
        function conf($locationProvider, $routeProvider){
          $locationProvider.hashPrefix('!');

          var index_html = '<nav-menu></nav-menu>';
          index_html +='<div class="container">';
          index_html +='<div class="row"><banner></banner></div>';
          index_html +='<div class="row"><product-list></product-list></div>';
          index_html +='</div>';

          $routeProvider.when('/',{
            template: index_html
          }).when('/product', {
            template: "Producto"
          }).otherwise('/');
        }]);