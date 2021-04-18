const express = require("express");
let app = new express();

app.get("/", function(req, res){
    res.send ("Hello Vamsi Krishna");
});


app.get("/contact", function(req, res){
    res.send ("checking host resquests");
});

app.get("/number", function(req, res){
    res.send ("02111111");
});


app.get("*", function(req, res){
    res.send ("02111111");
});


let port = 12345;
app.listen(port, function(){
     console.log("server started listening at localhost:" + port)

});

