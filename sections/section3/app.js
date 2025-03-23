const http = require('http'); // Importing the built-in 'http' module

const server = http.createServer((req, res) =>{ // Creating an HTTP server
    console.log(req) // Log the incoming request object to the console
});

server.listen(3000); // Listening on port 3000 for incoming connections