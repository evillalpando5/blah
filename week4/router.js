const http = require('http');
const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('content-type', 'text/html; charset=uf-8');
        res.write("<form method='POST' action='/message'>");
        res.write("<br /> Message <input type='text' name='id' placeholder='userID' />")
        res.write("<br /> Message <input type='text' name='pw' placeholder='password' />")
        res.write("<br /> <button type='submit'> Submit it </button>")
        res.write(`</form></body></html>`);
        res.end();
    } else if (url === '/message' && method === "POST") {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("--->>>")
            console.log(parsedBody)
        })
        // res.write(`<html> <body> <h2> MESSAGE RECEIVED </h2>`);
        // res.write("How do i get the message?")
        // res.write(`</body></html>`);
        res.end();
    } else if (url === '/message' && method === "GET") {
        res.write(`<html> <body> <h2> GET MESSAGE RECEIVED </h2>`);
        res.write("Still dont know gow to get the message?")
        res.write(`</body></html>`);
        res.end();
    } else {
        res.setHeader('content-type', 'text/html; charset=uf-8');
        res.write(`<html> <body> <h2> URL: unknown path </h2></h2>`);
        res.write(`</body></html>`);
        res.end();
    }
}
module.exports = requestHandler


// or
// module.exports = {
//     handler : requestHandler,
//     someText : "Hello World"
// }
//

