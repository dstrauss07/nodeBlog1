var express = require('express');
var router = express.Router();
let repo = require('../models/postRepository');

router.get('/', function(req,res,next){
    res.render('about' ,{title: 'About Us',
    postCount: repo.postCount(),
    posts: repo.getPosts() });
    
});

module.exports= router;