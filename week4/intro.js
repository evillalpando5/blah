// how the web works user/client (browser) ->
// enter http website sends request to sever who has access to database server returns html to browser
// Asynchronous language when you have a bunch of request 1 of 2 got to the database and process request and return, multiple processors
//  apache the request is blocked goes slower, 2, doesn't block and one processor, goes to next one
// one waiter per table wiating until cook is done vs taking order and going back for another
// order that while chef finishes chef lets waiter know when done less overhead this way  - nodejs


// const http = require("http");
// const server = http.createServer((req, res) => {
//     let {url, method, body} = req;
//     console.log("Made it so Far" + req.url);
//     console.log("Req method" + req.method );
//     console.log("Method = " + method);
//     console.log(body)
// });
//
// const PORT = 3000;
// console.log(`FL1: listening on Port: ${PORT}`);
// server.listen(PORT)
const http = require('http')
const server = http.createServer((req, res) => {
    let url = req.url;
    if (url === '/'){
        res.setHeader("Content-Type", 'text/html; charset = utf-8')
        let str = "<html> <body><h2> Hello World </h2>";
        res.write(str);
        res.write("<p style='color: red'> Space the final frontier! </p>")
        res.write(" </body> </html>")
        res.end();
    } else if (url === "/about") {
        res.setHeader("Content-Type", 'text/html; charset = utf-8')
        res.write("<html> <body><h2> All About Us! </h2>");
        res.write(" </body> </html>")
        res.end();
    }
});

const PORT = 3000;
console.log(`FL1: listening on Port: ${PORT}`);
server.listen(PORT)