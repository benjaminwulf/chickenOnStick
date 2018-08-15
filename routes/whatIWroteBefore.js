var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var app = express();

var PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log("App Listening at PORT " + PORT)
});

var reservation = [
    {
    name: "",
    phoneNumber: "",
    email: "",
    uId: ""

    }
]
var waitList = [];

var tables = [
    {
        name: "",
        Phone: "",
        Email: "",
        uId: ""
    }
]

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"home.html"))
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname), "reserve.html")
})

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
})


app.post("/reserve", function(req, res){
    var newRes = req.body;
    console.log(newRes)
    tables.push(newRes)
    res.json(newRes)
})

