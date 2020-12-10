const express = require("express");
const signupRouter = express.Router();
signupRouter.get("/",function(req,res){
    res.render("signup",{
        // nav:[{link:"/books",name:"Books"},{link:"/addauthors",name:"Add Authors"}],
        title:"Library"
    });
});
module.exports=signupRouter;