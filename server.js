var express = require ('express');
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static(__dirname));

//routes
app.get("/", function(request, response){
    response.render("index");
});

app.listen(port, function(){
    console.log("listening to port 5000");
});