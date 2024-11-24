var  express=require('express');// framework  for nodejs  to depoly on server 

var http=require("http");// to create server
var  fs=require("fs");// for  file handling
var app=express();//  itilizae   app  with  express
var path=require("path");// to link  folder  with server
var mysql=require("mysql");
//  to handle  post  method 
// mysql connection 
var  multer=require("multer");//file  upload.
var  con=mysql.createConnection({
  host:"localhost",
  user:"root",
 password:"",
database:"node3"  
	
	
})
var  body=require("body-parser");

app.use(body.urlencoded({extended:true}));//  to handle  json  body
// server configurable
//  handle  get  request 

var url=require("url");

app.set("views",path.join(__dirname,'views'));

app.set("view engine",'ejs');//  extnsion  of files  in views  folder


app.use(express.static(path.join(__dirname,'public')));

app.get("/fileupload",function(req,res)
{
	res.render("index");
});


const  storage=multer.diskStorage({
	
	destination:(req,file,callback) =>{
		
		callback(null,"./public/uploads");
	},
	filename:(req,file,cb) =>{
		
		cb(null,(file.filename=file.originalname));
	}
	
	
});

const  upload=multer({storage:storage});//middleware


app.post("/upload",upload.single("file"),(req,res,next) =>{
	
  console.log(req.file)	
  
  con.query("insert into register(name,password,image) values('"+req.body.t1+"','"+req.body.t2+"','"+req.file.filename+"')",function(err,result)
  {
	  
	 if(err) throw errr;
  if(result)
  {

   con.query("select *  from register",function(err,rows)
   {
	   if(err) throw  err;
	   if(rows)
	   {
		   res.render("list",{data:rows})
		   
		   
	   }
   })
  }	  
	  
  });
	
})
http.createServer(app).listen(3000,function(){
	
console.log("Server  start  at 3000");	
	
})