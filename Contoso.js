var http=require("http");
var express= require("express");
console.log("Hello World");
var app=express();



var Accountcontroller=function(req,resp){
var customer =[{customer:"Oracle",location:"England",turnover:10},
{customer:"MRF-Tyre",location:"India",turnover:20},
{customer:"AXIS-Bank",location:"Africa",turnover:30}];
resp.send(customer);
}

app.get('/',Accountcontroller);

var server=app.listen(8002,function(){
var host =server.address().address;
var port =server.address().port;
console.log("Example app listening at http://localhost:8000", host, port);
})
