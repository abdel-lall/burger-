var burger = require("../models/burger");
var express = require("express");



var router =express.Router();



router.get("/index",function(req,results){
    burger.selectAll(function(res){
        var data = {
            burgers: res
        }
       
        results.render("index",data);
    })
})
router.put("/index",function(req,results){
    var bId = req.body.id;
   
    burger.update(bId,function(res){
        results.status(200).end();
    })
});

router.post("/index",function(req,results){
    burgerName = req.body.burger_name
    burger.insert(burgerName,function(res){
        results.status(200).end();
    })
})

module.exports = router;