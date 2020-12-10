const express = require("express");
const authorsRouter = express.Router();
var authors=[
    {
        book:"tom and jerry",
        title:"joseph barbera",
        genre:"cartoon",
        img:"josetom.jpg"
    },
    {
        book:"Harry potter",
        title:"J K Rowling",
        genre:"Fantasy",
        img:"jkharry.png"
    },
    {
        book:"Drakula",
        title:"Bram Stoker",
        genre:"cartoon",
        img:"bramdrakula.jpg"
    },
    {
        book:"pattumede aadu",
        title:"Basheer",
        genre:"drama",
        img:"bashaadu.jpg"
    }
]
authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav:[{link:"/books",name:"Books"},{link:"/newauthor",name:"Add Author"},{link:"/signin",name:"LOG-OUT"}],
        title:'Library',
        authors
    });

});

authorsRouter.get('/:id',function(req,res){
    const id=req.params.id
    res.render('author',{
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/signin",name:"LOG-OUT"}],
        title:'Library',
        author:authors[id]
    })
})
module.exports=authorsRouter;

// const express = require('express');
// const authorsRouter=express.Router();

// var authors=[
//     {
//         name:'Joseph Barbera',
//         genre:'Animator,Director,Producer,Storyboard Artist,Cartoon Artist',
//         dob:'24-03-1911',
//         img:"josephbarbera.jpg"
//     },
//     {
//         name:'J K Rowling',
//         genre:'Author,Philanthropist,Film Producer,Television Producer,Screen Writer',
//         dob:'31-07-1965',
//         img:"jkrowling.jpg"
//     },
//     {
//         name:'Vaikom Muhammad Basheer',
//         genre:'Indian Independence Activist,Writer',
//         dob:'21-01-1908',
//         img:"vmbasheer.jpg"
//     },
//     {
//         name:'M T Vasudevan Nair',
//         genre:'Author,Screenplay Writer,Film Director',
//         dob:'09-08-1933',
//         img:"MTV1.jpg"
//     },
//     {
//         name:'Benyamin',
//         genre:'Novalist,Short Story Writer',
//         dob:'22-10-1971',
//         img:"benyamin2.jpg"
//     },
//     {
//         name:'O V Vijayan',
//         genre:'Author,Cartoonist',
//         dob:'02-07-1930',
//         img:"ovvijayan3.jpg"
//     },
//     {
//         name:'R K Narayan',
//         genre:'Writer',
//         dob:'10-10-1906',
//         img:"rknarayan4.jpg"
//     },
//     {
//         name:'Khushwant Singh',
//         genre:'Author,Lawyer,Diplomat,Journalist,Politician',
//         dob:'02-02-19015',
//         img:"sigh5.jpg"
//     },
//     {
//         name:'Leo Tolstoy',
//         genre:'Writer',
//         dob:'09-09-1828',
//         img:"leo6.jpg"
//     },
//     {
//         name:'William Shakespeare',
//         genre:'Play Writer,Poet,Actor,Dramatist',
//         dob:'04-1564',
//         img:"william.jpg"
//     }
  
// ]

// authorsRouter.get('/',function(req,res){
//     res.render("authors",
//     {
//         nav:[{link:"/authors",name:"Authors"},{link:"/books",name:"Books"},{link:"/addauthor",name:"Add Author"}],
//         title:'Library',
//         authors
//     });

// });

// authorsRouter.get('/:id',function(req,res){
//     const id=req.params.id
//     res.render('author',{
//         nav:[{link:"/authors",name:"Authors"},{link:"/books",name:"Books"}],
//         title:'Library',
//         author:authors[id]
//     })
// })
// module.exports=authorsRouter;
