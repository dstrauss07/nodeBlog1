const fs = require('fs'),
    path = require('path'),
    filePath = path.join( __dirname, "data"),
    fileName = path.join(filePath, "postData.json");

let postList = [];

let loadPosts = () =>{
    fs.readFile(fileName, "utf8", (err,data)=>{
        if (err){
            console.error("error loading data file: " + err.message);
            throw err;
        }
        else{
        let newPostsArr = JSON.parse(data);
        if(newPostsArr.length > 0){
            postList = newPostsArr;
        }
    }
    });
}
let savePosts = () =>{
    fs.writeFile(fileName, JSON.stringify(postList), (err) =>{
        if(err){
            console.error("error writing the file. " + err.message);
            throw err;
        }
        console.log("the file has been saved.");
    });
}

loadPosts();

let repo = {
    dataSource :  "FileSystem1",
    postCount: () =>{
        return postList.length;
    },
    getPosts: () =>{
        return postList;
    },
    getPostByPermalink: (permalink) =>{
        return postList.find((post)=> {
            return post.permalink === permalink;
        });

    },
    addPost: (newPost) => {
        postList.push(newPost);
        savePosts();
    }
};

module.exports = repo;