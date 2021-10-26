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

//show data by id
exports.showById = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM user where id = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    })
}

//post data
exports.postData = function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    connection.query("INSERT INTO user (username, password) VALUES (?,?)", [username, password],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Add Data Succesfully", res);
        }
    })

}