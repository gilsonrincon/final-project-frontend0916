var fs = require("fs")

var p = "./productos/";
fs.readdir(p, function (err, files) {
    console.log(files.length);
    files.forEach(function (file) {
        console.log(file);
    });
});