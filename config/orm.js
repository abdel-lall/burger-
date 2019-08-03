var connection = require("./connection.js");


var orm = {
    selectAll : function(cb){
        connection.query("SELECT * FROM burgers",function(err,results){
            if (err) throw error;
            cb(results)
        })
    },
    insertOne : function(burgerName,cb){
        var post  = {burger_name: burgerName, devoured: 0};
        connection.query('INSERT INTO burgers SET ?', post, function (err, results) {
         if (err) throw error;
         cb(results);
        })
    },
    updateOne : function(burgerID,cb){
        connection.query("UPDATE burgers SET devoured = ? WHERE id = ?",[1,burgerID],function (err, results) {
            if (err) throw error;
            cb(results);
           })
    }
}

module.exports = orm;