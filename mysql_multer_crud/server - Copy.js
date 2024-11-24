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

app.get("/edit/:id",function(req,res)
{
	con.query("select * from login where id='"+req.params.id+"'",function(err,rows)
	{
		if(err) throw err;
		if(rows)
		{
			
			res.render("edit",{data:rows})
			
		}
		
		
	});
	
	
});
//update  data 

app.post("/update",function(req,res)
{
	
	con.query("update login set name='"+req.body.t1+"' , password='"+req.body.t2+"' where id='"+req.body.id+"'",function(err,rs)
	{
		if(err) throw err;
		if(rs)
		{
			
			res.redirect("/list");
			
		}
		
		
	});
	
});

//login 

app.post("/login",function(req,res)
{
	
con.query("select * from login where name='"+req.body.t1+"' and password='"+req.body.t2+"'",function(err,result)
{
 if(err) throw err;
 if(result.length)
 {
	  if(result[0].name =="admin" && result[0].password =="admin")
	  {
		 res.render("admin")  
		  
	  }
	 
	  else{
		 res.render("user"); 
	  }
	  
	 
 }
 else{
	 
	 res.render("invalid");
	 
 }

});	
	
	
})
// drop down
app.get("/combo",function(req,res)
{
con.query("select * from login",function(err,result)
{
  if(err) throw err;
  if(result)
  {
	  
	   res.render("combo",{data:result});
	  
  }


})	
	
	
})
http.createServer(app).listen(3000,function(){
	
console.log("Server  start  at 3000");	
	
})