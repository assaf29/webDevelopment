var http = require('http');
var express = require("express");
var request = require("request");
var app = express();
const path = require('path')

app.use(express.static(__dirname + '/public'));


app.get("/",function (req,res){

  res.sendFile('index.html', {
        root: path.join(__dirname, './view')
    })

    
});

app.get("/signin",function(req,res){
    
  
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});


