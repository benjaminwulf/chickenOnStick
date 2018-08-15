app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname), "reserve.html")
})
