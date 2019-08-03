var orm = require("../config/orm.js");

var burger ={
    selectAll : function(cb){
        orm.selectAll(function(res){
            cb(res);
        })
    },
    insert : function(name,cb){
        orm.insertOne(name,function(res){
            cb(res);
        })
    },
    update : function(id,cb){
        orm.updateOne(id,function(res){
            cb(res);
        })
    }
}

module.exports = burger;