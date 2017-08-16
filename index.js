var express = require("express");
var app = express();

const port = process.env.PORT || 3000;

app.listen(port,function(){
	console.log("Server Started at port ",port);
});

app.use(function(req,res,next){
	console.log("1st halt");
	next();
});
app.use(function(req,res,next){
	console.log("2nd halt");
	res.send("Sorry cannot process request");
});
app.get("/",function(req,res){
	res.sendFile(__dirname+"/views/index.html");
});
app.get("/about/:name",function(req,res){
	res.set("Content-Type","text/html");
	res.sendFile(__dirname+"/views/about.html");
})