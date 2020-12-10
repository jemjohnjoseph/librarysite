const express = require("express");
const booksRouter = express.Router();
var books = [
    {
        title:"tom and jerry",
        author:"joseph barbera",
        genre:"cartoon",
        img:"tom.jpg"
    },
    {
        title:"Harry potter",
        author:"J K Rowling",
        genre:"Fantasy",
        img:"harry.jpg"
    },
    {
        title:"Drakula",
        author:"Bram Stoker",
        genre:"cartoon",
        img:"drakula.jpg"
    },
    {
        title:"pattumede aadu",
        author:"Basheer",
        genre:"drama",
        img:"aadu.jpg"
    }
]
booksRouter.get("/",function(req,res){
    res.render("books",{
       
        nav:[{link:"/authors",name:"Authors"},{link:"/addbook",name:"Add Book"},{link:"/signin",name:"LOG-OUT"}],
        title:"Library",
        books
    });
})
booksRouter.get("/:id",function(req,res){
    const id = req.params.id
    res.render("book",{
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/signin",name:"LOG-OUT"}],
        title:"Library",
        book: books[id]
    });
})
module.exports = booksRouter;