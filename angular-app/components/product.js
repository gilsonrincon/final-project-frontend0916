app.component('product', {
	templateUrl: "tpl/product.html",
	controller: function ProductController($routeParams){
		this.product = {
			"id": 1,
			"name": "Producto 1",
			"description": "Esta es la descripción del producto",
			"img": "producto1.jpg",
			"price": 2500,
			"tags": ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3"]
		};

		console.log($routeParams);
	}
});