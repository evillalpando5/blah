const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

app.use( '/add-product',( req, res, next) => {
    // let str = "<h2> Enter Product Title </h2>"
    // str += "<form action='/product' method='POST'>";
    // str += "Title: <input type='text' name='title' />";
    // str += "</br> Author: <input type='text' name='author' />";
    // str += "</br> <button type='submit'> Add Product </button>";
    // res.send(str)
    res.sendFile(path.join(path.join(__dirname, 'public/app2Continued.html')));
})
app.use('/product', (req, res, next)=> {
    console.log(req.body);
    // res.redirect('/');
    // res.send(`Selection: ${req.body.title}  Author: ${req.body.author} `)
})
app.use('/', (req, res, next)=> {
    res.send("<h1> Page Not Found </h1>");
})

const server = http.createServer(app);

const port = 3000;
server.listen(port );
console.log(`listening on port ${port}`)

