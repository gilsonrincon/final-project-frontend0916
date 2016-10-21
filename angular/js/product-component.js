app.component('product',{
	templateUrl: "views/product-tpl.html",
	controller: function ProductController($http){
		var self = this;
		$http.get('products/1.json').then(function(response){
			self.product = response.data;
		});
	}
})