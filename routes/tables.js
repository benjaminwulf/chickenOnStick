var express = require('express');
var router = express.Router();

router.get("/tables", function(req, res){
    res.render('tables', {title: 'Express'})
})

module.exports = router;