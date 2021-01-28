const express = require ("express");
const app = express();
const port = process.env.PORT || 4000;
const ejs = require ("ejs");
// const database = require ("./models/database/db");


app.use(express.static("public"))













app.listen(port,function(err){
    if(err) throw err;
    console.log(`server running at port ${port}`);
})