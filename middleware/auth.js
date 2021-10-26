var connection = require('../conn');
var mysql = require('mysql');
var md5 = require('MD5');
var response = require('../response');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

//register controller
exports.register = function(req, res){
    var post = {
        username: req.body.username,
        password: md5(req.body.password),
        token:'',
        ip:''
    }

    var query = "SELECT username FROM ?? WHERE ??=?";
    var table = ["user","username", post.username];

    query = mysql.format(query,table);

    connection.query(query, function(error, rows){
        if(error){
            console.log(error);
        }else{
            // response.ok(rows.length);
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query = mysql.format(query, table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("Berhasil menambahkan data user baru", res);
                    }
                })
            }else{
                response.ok("Username sudah terdaftar", res);
            }
        }
    })

}