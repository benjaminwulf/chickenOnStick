var express = require('express');
var router = express.Router();

router.get("/reserve", function(req, res){
    res.render('reserve', {title: 'Express'})
})

module.exports = router;

// app.get("/reserve", function(req, res){
//     res.sendFile(path.join(__dirname), "reserve.html")
// })
