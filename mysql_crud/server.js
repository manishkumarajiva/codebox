var  express=require('express');// framework  for nodejs  to depoly on server 

var http=require("http");// to create server
var  fs=require("fs");// for  file handling
var app=express();//  itilizae   app  with  express
var path=require("path");// to link  folder  with server
var mysql=require("mysql");
//  to handle  post  method 
// mysql connection 

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


// list  data 

app.get("/list",function(req,res)
{
	con.query("select * from login",function(err,rows)
	{
		if(err) throw err;
		if(rows)
		{
			  console.log(rows);
			res.render("list",{data:rows});
			
		}
		
	});
	
	
});

//delete  data 

app.get("/delete/:id",function(req,res)
{
	con.query("delete from login where id='"+req.params.id+"'",function(err,rows)
	{
	 if(err) throw err;
  if(rows)
  {

  res.redirect("/list");
  }	  
		
	})
	
	
});

app.get("/adddata",function(req,res)
{
	
	res.render("login");
	
});

app.post("/login_action",function(req,res)
{
	con.query("insert into login(name,password) values('"+req.body.t1+"','"+req.body.t2+"')",function(err,result)
	{
		
		if(err) throw  err;
		if(result)
		{
			
			res.end(" Record  inserted");
			
			
		}
	});
	
	
});
http.createServer(app).listen(3000,function(){
	
console.log("Server  start  at 3000");	
	
})