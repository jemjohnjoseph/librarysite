const express = require("express");
const addbookRouters = express.Router();
addbookRouters.get('/',function(req,res){
    res.render("addbook",
    {
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/signin",name:"LOG-OUT"}],
        title:'Library',
        // authors
    });

});
module.exports=addbookRouters;