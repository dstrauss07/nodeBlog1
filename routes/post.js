let express = require('express'),
    router = routher= express.Router(),
    repo = require("../models/postRepository");

    router.get('/:permalink',(req,res,next)=>{
        var post = repo.getPostByPermalink(req.params.permalink);
        res.render('post', {title: post.title, post: post,
            postCount: repo.postCount(),
            posts: repo.getPosts() });
        })
 



module.exports = router;