const express = require('express');
const router = express.Router();
const path = require('path');
router.use(express.static(path.join(__dirname, '../public')));

router.get('/add-product', (req, res, next) => {
    res.sendFile( path.join( __dirname, '../public/app2Continued.html' ) );
})
router.post('/product', (req, res, next)=> {
    console.log(req.body);
    res.send(`Selection:${req.body.title} author:${req.body.author}`)
})
module.exports = router;
console.log(`listening on port in admin`)
