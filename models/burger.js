var orm = require("../config/orm.js");

var burger = {
    create: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res)
        });
    },
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    update: function(vals, condition, cb){
        orm.updateOne("burgers", vals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;