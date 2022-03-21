const express = require("express");
const  newsRouter =  express.Router() ;
const axios = require("axios") ;



newsRouter.get("", async(req,res)=>{

 // res.render("news") ;

 try {
     
    const newsApi =   await axios.get("https://newsapi.org/v2/top-headlines?country=ng&apiKey=76195398b4e04e3ab2d7c00a0d11f259") ;
     
       res.render("news" , {articles: newsApi.data})
    
 } catch (err) {


    if (err){
     console.log(err.response.data) ;
     console.log(err.response.status) ;
     console.log(err.response.status) ;
    }else if (err.request){

        console.log(err.request) ;

    }else {

        console.log('Error', err.message) ;
    }
     
 }


}

) ;


//single news
newsRouter.get("/:id", async(req,res)=>{
      let articleID =  req.params.id ;
    // res.render("news") ;
   
    try {
        
       const newsApi =   await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`) ;
        
          res.render("newSingle" , {article: newsApi.data})
       
    } catch (err) {
   
   
       if (err){
        console.log(err.response.data) ;
        console.log(err.response.status) ;
        console.log(err.response.status) ;
       }else if (err.request){
   
           console.log(err.request) ;
   
       }else {
   
           console.log('Error', err.message) ;
       }
        
    }
   
   
   }
   
   )

// search

newsRouter.post("", async(req,res)=>{

    let search = req.body.search ;
    // res.render("news") ;
   
    try {
        
       const newsApi =   await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${articleID}`)  ;
        
          res.render("newSearch" , {articles: newsApi.data})
       
    } catch (err) {
   
   
       if (err){
        console.log(err.response.data) ;
        console.log(err.response.status) ;
        console.log(err.response.status) ;
       }else if (err.request){
   
           console.log(err.request) ;
   
       }else {
   
           console.log('Error', err.message) ;
       }
        
    }
   
   
   }
   
   ) ;
   





module.exports = newsRouter 