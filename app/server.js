var express = require('express');
var fs = require('fs');

var server = express();

server.set('view engine', 'pug');

server.get('/', function(req, res){
	var dir ="./productos/";
	var arrProd = [];
	fs.readdir(dir, function(err, files){
		files.forEach(function(file){
			var objProd = JSON.parse(fs.readFileSync(dir+file, "utf8"));
			arrProd.push(objProd);
		})

		res.render('index', {productos: arrProd});
	})
});

server.get('/contacto', function(req, res){
	if(req.query.name){
		res.send(req.query);
	}else{
		res.render('contacto');
	}
});

server.get('/producto/:id',function(req, res){
	//Generamos la ruta del archivo
	var producto = "productos/"+req.params.id+".json";

	try{
		//Convertimos el archivo leido en un formato JSON
		var objProducto = JSON.parse(fs.readFileSync(producto,'utf8'));	
		res.render('producto', objProducto);
	}catch(e){
		res.render('error',{code: 404,
							msg: 'Error: Producto no encontrado.'});
	}
});

server.get("/categoria/:id",function(req, res){
	var categoria = "categorias/"+req.params.id+".json";
	try{
		var objCategoria = JSON.parse(fs.readFileSync(categoria,"utf8"));
		var arrProductos = [];
		var paso;
		for(paso = 0; paso < objCategoria.products.length; paso++){
			producto = objCategoria.products[paso];
			var prod="productos/"+producto+".json";
			var objProd=JSON.parse(fs.readFileSync(prod,"utf8"))
			arrProductos[paso] = objProd;
		}

		res.render("categoria", {productos: arrProductos,
									categoria: objCategoria});
	}catch(e){
		console.log(e);
		res.render('Error', {code: 404,
							msg: "Categoría no encontrada..."});
	}
})

server.get("/content/:name", function(req, res){
	var contentJSON = "cms/"+req.params.name+".json";

	try{
		var objcontentJSON = JSON.parse(fs.readFileSync(contentJSON, 'utf8'));
		res.render('content', objcontentJSON);

	}catch(e){
		console.log(e);
		res.render('error', {code: 404, 
							msg: "Página no encontrada..."});
	}
})

server.use('/img', express.static('assets'));
server.use('/css', express.static('./css'));
server.use('/js', express.static('./js'));
server.use('/fonts', express.static('./fonts'));

server.listen(8080, function(){
	console.log('Estamos corriendo en el puerto 8080....');
});