var express = require('express');
var router = express.Router();
let dbConnect=require("../dbconfig/db-connect");
let csrf=require('csurf');

let csrfProtection=csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
    dbConnect.get().collection('product').find().toArray(function (err, docs) {
        res.render('shop/index', {title: 'Shoping-cart', products: docs});
        console.log(docs)

    });
});

router.get('/user/signup',function (req,res,next) {
    res.render('user/signup',{csrfToken:req.csrfToken()})
});

router.post('/user/signup',function (req,res,next) {
    res.redirect('/')
});
module.exports = router;




