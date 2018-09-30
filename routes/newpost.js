let express = require('express');
let router = express.Router();
let repo = require('../models/postRepository');


// get send user to new post page with form to enter post
router.get("/", (req,res,next) =>{
    res.render('newpost', {title: 'new post'})
});

// POST receives the data that user enters
router.post("/",(req,res,next)=>{
    if(req.body.passphrase === "password"){
    let newPost = {};

    newPost.title = req.body.title;
    newPost.permalink = req.body.permalink;
    newPost.postContent = req.body.postContent;
    newPost.author = req.body.author;

    repo.addPost(newPost);
    }
    res.redirect("/");
});



module.exports = router;