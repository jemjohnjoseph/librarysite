const express = require("express");
const port = process.env.Port || 5000;
const booksRouter = require("./src/routes/bookRoutes");
const authorsRouter = require("./src/routes/authorRoutes");
const addauthorRouters  = require("./src/routes/addauthorRouters");
const signRouter = require("./src/routes/signRouter");
const signupRouter = require("./src/routes/signupRouter");
const addbookRouters = require("./src/routes/addbookRouters");
const app = new express();
app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/newauthor",addauthorRouters);
app.use("/addbook",addbookRouters);
app.use("/signin",signRouter);
app.use("/signup",signupRouter);
// app.use("/signin",signRouter);
app.get("/",function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",
    {
        nav:[{link:"/signin",name:"Sign-IN"},{link:"/signup",name:"Sign-UP"}],
        title:"Digital Library"
});
});

// app.get("/books",function(req,res){
//     res.render("books",{
//         nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/signin",name:"Sign-IN"},{link:"/signup",name:"Sign-UP"}],
//         title:"Library"
//     });
// });
// app.get("/authors",function(req,res){
//     res.render("authors",{
//         nav:[{link:"/books",name:"Books"},{link:"/addauthors",name:"Add Authors"}],
//         title:"Library"
//     });
// });

app.listen(port,()=>{console.log("Server Ready at "+ port)}); 
