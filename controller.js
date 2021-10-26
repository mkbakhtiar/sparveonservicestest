'use strict';

var response = require('./response');
var connection = require('./conn');

exports.index = function(req, res){
    response.ok("Application is running!", res);
};

//show data user
exports.showUser = function(req,res){
    connection.query('SELECT * FROM user', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res);
        }
    })
}