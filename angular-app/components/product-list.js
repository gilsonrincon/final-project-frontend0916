app.component('productList',{
	templateUrl: "tpl/product-list.html",
	controller: function ProductListController($http){
		$http.get('product-list.json').then(function(response){
			console.log(response);
		});
	}
});