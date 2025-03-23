const http = require('http'); // Importing the built-in 'http' module

const server = http.createServer((req, res) =>{ // Creating an HTTP server
    console.log(req.url, req.method, req.headers); // Log the incoming request object to the console
    // process.exit() //Hard exits event loop
});

server.listen(3000); // Listening on port 3000 for incoming connections