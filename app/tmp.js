var fs = require("fs"),
    path = require("path");

var p = "./productos/";
fs.readdir(p, function (err, files) {
    
    files.forEach(function (file) {
        console.log(file);
    });
});