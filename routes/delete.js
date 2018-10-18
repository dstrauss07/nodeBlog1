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
        id: repo.getPostIndex(req.params.permalink)
    });
    let postID= getPostIndex(req.params.permalink);
    repo.deletePost(postID);
    
    });
