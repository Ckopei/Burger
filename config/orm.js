var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb){
        connection.query("SELECT * FROM ?",
        [table],
        function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(table, name, devouredTorF, cb){
        var post = {burger_name: name, devoured: devouredTorF}
        connection.query("INSERT INTO ?? SET ?",
        [table, post],
        function (error, result){
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (table, devouredTorF, condition, cb){
        connection.query("UPDATE ? SET ? WHERE ?",
        [table, {devoured: devouredTorF}, condition],
        function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    delete: function (table, condition, cb){
        connection.query("DELETE FROM ? WHERE ?",
        [table, condition],
        function(err,result){
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;