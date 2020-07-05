var path =require('path');

var express =require('express');
var app=express();


app.use(express.static(path.join(__dirname,'public')));



const port =process.env.PORT||3000;
app.listen(port);