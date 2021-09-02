// AUTORA: FIORELLA GAMARRA
var http = require('http');
var fs = require('fs');
var path = require('path');
var puerto = 3000;
var host = 'localhost';


http.createServer(function(req, res) {
    console.log('Método: ', req.method);
    console.log('Url: ', req.url);
    console.log('--------------');
    // Evaluación rutas
    if (req.url == "/") {
        fs.readFile("./src/index.html", "UTF-8", function(err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html)
        });
    } else if (req.url == "/nosotros") {
        fs.readFile("./src/nosotros.html", "UTF-8", function(err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html)
        });
    } else if (req.url == "/servicios") {
        fs.readFile("./src/servicios.html", "UTF-8", function(err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html)
        });
    } else if (req.url == "/contacto") {
        fs.readFile("./src/contacto.html", "UTF-8", function(err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html)
        });
    } else if (req.url == "/app") {
        fs.readFile("./src/app.html", "UTF-8", function(err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html)
        });
    } else if (req.url == "/createServer" && req.method == "POST") {
        // LÓGICA PARA CREAR SERVIDOR
        let body = ''
            // Variables para el nombre de servidor y el puerto que se recibira desde cliente
        let nameServer = ''
        let port = ''
        req.on('data', (data) => {
            // Los valores se almacenan en esta data
            body += data;
            // Desglosamos los valores del string, este para el nombre del servidor, sin embargo, en esta parte se ha tenido un problema, supuestamente como segundo parámetro debe ir body.indexOf('&')-1 para tomar la ultima letra del nobre del server pero esto no sucede, el '=' que tiene ahora funciona para algunos nombres
            nameServer = body.substr(11, body.indexOf('='))
                // Desglosamos del string el valor del puerto
            port = body.substr(-4, body.length - 1)
                //Imprimimos valores
            console.log("Nombre de server creado: ", nameServer)
            console.log("Puerto creado: ", port)
        });
        req.on('end', () => {
            //Creamos el nuevo servidor
            http.createServer(function(request, response) {
                response.writeHead(200, { "Content-Type": "text/html" })
                response.write(
                    "<h1>Servidor Creado  </h1>" +
                    "<p> Nombre de server: " + nameServer + "</p> " +
                    "<p> Puerto: " + port + "</p> "
                )
                response.end()
            }).listen(port);
            // Verificamos en consola
            console.log("----->Listening new server on port: ", port)
        });
        //Redireccionamos a un archivo cliente después de que se haya creado el nuevo servidor
        // A ESTA PARTE NO SE HA HECHO MANEJO DE PUERTOS YA EN USO POR TEMA DE TIEMPO, SE PUEDE VERIFICAR AL QUERER CREAR UN SERVIDOR CON EL MISMO PUERTO.
        fs.readFile("./src/newServer.html", "UTF-8", function(err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html)
        });
    } else if (req.url == "/confirm" && req.method == "POST") {
        fs.readFile("./src/confirmacion.html", "UTF-8", function(err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html)
        });
    } else if (req.url.match("\.css$")) {
        // Manejo archivos estáticos
        var cssPath = path.join(__dirname, 'src', req.url);
        var fileStream = fs.createReadStream(cssPath, 'UTF-8');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fileStream.pipe(res);
    } else if (req.url.match("\.js$")) {
        // Manejo archivos estáticos
        var jsPath = path.join(__dirname, 'src', req.url);
        var fileStream = fs.createReadStream(jsPath, 'UTF-8');
        res.writeHead(200, { 'Content-Type': 'text/js' });
        fileStream.pipe(res);
    } else if (req.url.match("\.js$")) {
        // Manejo archivos estáticos
        var jsPath = path.join(__dirname, 'src', req.url);
        var fileStream = fs.createReadStream(jsPath, 'UTF-8');
        res.writeHead(200, { 'Content-Type': 'module/js' });
        fileStream.pipe(res);
    } else if (req.url.match("\.jpg$")) {
        var imagePath = path.join(__dirname, 'src', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        fileStream.pipe(res);
    } else {
        fs.readFile("./src/err404.html", "UTF-8", function(err, html) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(html)
        });
    }
}).listen(puerto, host, () => {
    console.log(`Server is running on http://${host}:${puerto}`);
});