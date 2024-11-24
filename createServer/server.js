var  express=require('express');// framework  for nodejs  to depoly on server 

var http=require("http");// to create server

var app=express();//  itilizae   app  with  express
var path=require("path");// to link  folder  with server

//  to handle  post  method 

var  body=require("body-parser");

app.use(body.urlencoded({extended:true}));//  to handle  json  body
// server configurable

app.set("views",path.join(__dirname,'views'));

app.set("view engine",'ejs');//  extnsion  of files  in views  folder
app.get("/",function(req,res)
{
	
	res.render("index");//  to ope  file  from  view  directory
	
	
});
app.get("/login",function(req,res)
{
	res.render("login");
	
})

// handle  post request 

app.post("/register_action",function(req,res)
{
	
	console.log(req.body.t1);
	
})
//  server  to ejs  files  data  send 


app.get("/data",function(req,res)
{
	res.render("index",{data:"Ajay"});
	
	
})

//  to handle  route  parameter 

app.get("/getData/:id",function(req,res)
{
	
	console.log(req.params.id)
	
})
http.createServer(app).listen(3000,function(){
	
console.log("Server  start  at 3000");	
	
})