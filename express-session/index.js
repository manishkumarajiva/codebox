const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

//create app
const app = express();
const port = 7700;


//handle json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true, limit : '100kb'}));

//set path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
    
//initialize session;
app.use(expressSession({secret : 'eMxapnriesshsSkeusmsairon', saveUninitialized : true, resave : true}))

app.get('/login',function(req,res){
    res.render('login')
});




app.post('/logged',function(req,res){
    const { email, password} = req.body;
    const sess = req.session;
    
    sess.email = email;
    sess.password = password;
    
    res.redirect('/');
})


app.get('/',function(req,res){
    const sess = req.session;
    if(sess.email){
        res.redirect('/admin');
    }else{
        res.redirect('/login')
    }
});


app.get('/admin',function(req,res){
    const sess = req.session;
    if(sess.email){
        res.render('admin',{email : sess.email})
    }else{
        res.redirect('/login')
    }
})


app.get('/logout', function(req,res) {
    req.session.destroy(function(){
        console.log('session is destroyed');
        res.redirect('/login')
    })
})

app.listen(port, ()=> console.log(`Server listening on port ${port}`))