const express = require ("express");
const app = express();
const port = process.env.PORT || 4000;
const ejs = require ("ejs");
const database = require ("./models/database/db");
app.use(express.static("public"))
app.set("view engine","ejs");



app.get("/dashboard",function(req,res){
    res.render("dashboard");
})

app.get("/register",function(req,res){
    res.render("register")
})

app.get("/signin",function(req,res){
    res.render("signin")
})

app.get("/start",function(req,res){
    res.render("start")
})







app.listen(port,function(err){
    if(err) throw err;
    console.log(`server running at port ${port}`);
})