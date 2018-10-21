"use strict";
let express = require('express'),
router = express.Router(),
repo = require("../models/postRepository");

router.get('/:permalink',(req,res,next)=>{
    let post = repo.getPostByPermalink(req.params.permalink);
    res.render('delete', {
        title: post.title,
        permalink: post.permalink,
        author: post.author,
        content: post.postContent,
        posts: repo.getPosts(),
        id: repo.getPostIndex(req.params.permalink)
    });
});

// POST deletes the post

router.post("/", (req,res,next) =>{
     let delPost = {};    
       delPost.id = req.body.delid;
        repo.deletePost(delPost.id);
        res.redirect('/');

});

module.exports = router;