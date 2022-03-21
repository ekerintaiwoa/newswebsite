

const express = require("express") ;
const app = express() ;
const bodyparser = require("body-parser") ;


 // static files
  app.use(express.static('public')) ;
  app.use('/css' , express.static(__dirname + "public/css"));
  app.use('/img' , express.static(__dirname + "public/img"));
  app.use('/js' , express.static(__dirname + "public/js"));


 // templating engine (set the view (path) and also view engine to ejs)

  app.set("views", "./src/views") ;
  app.set("view engine" ,"ejs")  ;


  // body parser

  app.use(bodyparser.urlencoded({extended:true})) ;



  // Routes 

  const newsRouter =   require("./src/routes/news") ;
  app.use("/" ,newsRouter) ;
  app.use("/article" ,newsRouter) ;




const port = 5000 ;

// port listening
app.listen(port,()=>{

    console.log("listening on port port 5000")
})