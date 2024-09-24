const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("inside this middleware handle it")
    next();

})
app.use((req, res, next) => {
    console.log("inside second middleware handle it")
    res.send("<h1> Hello World </h1>")
})

const server = http.createServer(app);

const port = 3000;
server.listen(port );
console.log(`listening on port ${port}`)

