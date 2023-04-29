const express = require('express');

const app = express();

app.get('/',function(request,response){
    console.log(request);
    console.log(typeof request);
    response.send('<h1>Hello World!</h1>');
});

app.get('/contact',function(req,res){
    res.send("Hi, please contact me at : 12345@gmail.com");
});

app.listen(3000,function(){
    console.log('Server is running on Port 5500')
});