const express = require("express");
const addauthorRouters = express.Router();
addauthorRouters.get('/',function(req,res){
    res.render("newauthor",
    {
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/signin",name:"LOG-OUT"}],
        title:'Library',
        // authors
    });

});
module.exports=addauthorRouters;