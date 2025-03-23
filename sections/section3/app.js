const http = require('http');
// To import routes.js
const routes = require('./routes');
// To use route.js in createServer
// const server = http.createServer(routes);

// From routes.js exported someText
console.log(routes.someText); 
// From routes.js exported handler(requestHandler)
const server = http.createServer(routes.handler); 

server.listen(3000);