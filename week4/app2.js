const http = require('http');
const routes = require('./router');
const fs = require('fs');
const server = http.createServer(routes);
//this and something else
// const server = http.createServer(router.someText);
const PORT = 5000;
console.log(`listening on local port: ${PORT}`)
server.listen(PORT)