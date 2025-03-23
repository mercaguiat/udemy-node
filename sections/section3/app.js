const http = require('http'); // Importing the built-in 'http' module

const server = http.createServer((req, res) =>{ // Creating an HTTP server
    console.log(req.url, req.method, req.headers); // Log the incoming request object to the console
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>hello</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000); // Listening on port 3000 for incoming connections