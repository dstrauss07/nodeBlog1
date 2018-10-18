"use strict";
let express = require('express'),
router = express.Router(),
repo = require("../models/postRepository");

router.get('/:permalink',(req,res,next)=>{
    let post = repo.getPostByPermalink(req.params.permalink);
    res.render('edit', {
        title: post.title,
        permalink: post.permalink,
        author: post.author,
        content: post.postContent,
        id: repo.getPostIndex(req.params.permalink)
    });
});

// POST receives the data from the user about the new post

router.post("/", (req,res,next) =>{
    let updatePost = {};
        updatePost.title = req.body.title;
        updatePost.permalink = req.body.permalink;
        updatePost.postContent = req.body.postContent;
        updatePost.author = req.body.author;
        updatePost.id = req.body.id;

        repo.updatePost(updatePost.id, updatePost);

        res.redirect('/');

});

module.exports = router;