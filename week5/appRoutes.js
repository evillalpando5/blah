const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const adminRoutes = require('./routes/admin');
app.use(express.static(path.join(__dirname, 'week5/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(adminRoutes);
app.use('/', (req, res, next)=> {
    res.send("<h1> Page Not Found </h1>");
})

const server = http.createServer(app);
const port = 3000;
server.listen(port );
console.log(`listening on port ${port}`)

