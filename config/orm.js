var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb){
        connection.query("SELECT * FROM ??",
        [table],
        function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(table, name, devouredTorF, cb){
        connection.query("INSERT INTO "+table+ " (burger_name, devoured) VALUES (?,?)",
        [name, devouredTorF],
        function (err, result){
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (table, devouredTorF, condition, cb){
        connection.query("UPDATE "+table+ " SET "+devouredTorF+" WHERE "+condition,
        // [table, devouredTorF, condition],
        function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    delete: function (table, condition, cb){
        connection.query("DELETE FROM "+table+ " WHERE " +condition,
        // [table, condition],
        function(err,result){
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;