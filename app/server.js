var express = require('express');
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

server.get('/product/:id',function(req, res){
	res.send(req.params.id);
});

server.use('/img', express.static('assets'));
server.use('/css', express.static('../css'));

server.listen(8080, function(){
	console.log('Estamos corriendo en el puerto 8080....');
});