const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

app.use( '/login',( req, res) => {
    res.sendFile(path.join(path.join(__dirname, 'public/main.html')));

})
app.use('/loginAttempt', (req, res)=> {
    console.log(req.body);
    let id = req.body.id
    let pw = req.body.pw
    if (id ==="Jack" && pw === "BeQuick" ) {
        res.send("<h1> Password OK </h1>");
    }
    else{
        res.send("<h1> You shall not pass </h1>");
    }
})


const server = http.createServer(app);

const port = 3000;
server.listen(port );
console.log(`listening on port ${port}`)

