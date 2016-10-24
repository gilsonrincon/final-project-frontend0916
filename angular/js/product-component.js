app.component('product',{
	templateUrl: "views/product-tpl.html",
	controller: function ProductController($http, $routeParams){
		var id = $routeParams.product_id;
		var self = this;
		$http.get('products/'+id+'.json').then(function success(response){
			self.product = response.data;
		});
	}
})