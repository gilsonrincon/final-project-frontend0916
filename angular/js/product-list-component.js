app.component('productList', {
	templateUrl: "views/product-list-tpl.html",
	controller: function ProductListController($http){
		var self = this;

		self.orderProp = "name";
		$http.get('product-list.json').then(function(response){
			self.products = response.data;
		});
	}
});