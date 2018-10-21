let express = require('express');
let router = express.Router();
let repo = require('../models/postRepository');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Dave Strauss' Coding Blog", 
  Author: "Daves", 
  dataSource: repo.dataSource, 
  postCount: repo.postCount(),
  posts: repo.getPosts(),
  });
});



module.exports = router;
