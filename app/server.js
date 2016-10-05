var express = require('express');
var fs = require('fs');

var server = express();

server.set('view engine', 'pug');

server.get('/', function(req, res){
	//res.send('Hola');
	res.render('index');
});

server.get('/contacto', function(req, res){
	//res.send('hola contacto');
	res.render('contacto');
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

server.use('/img', express.static('assets'));
server.use('/css', express.static('../css'));

server.listen(8080, function(){
	console.log('Estamos corriendo en el puerto 8080....');
});