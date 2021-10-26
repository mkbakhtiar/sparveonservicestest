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
        password: md5(req.body.password)
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

exports.login = function(req,res){
    var post = {
        password: req.body.password,
        username:req.body.username
    }

    var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
    var table = ["user", "password", md5(post.password), "username", post.username];

    query = mysql.format(query,table);
    connection.query(query, function(error, rows) {
        if(error){
            console.log(error);
        }else{
            if(rows.length == 1){
                var token = jwt.sign({rows}, config.secret, {
                    expiresIn: 1440
                });

                id_user = rows[0].id;

                var data = {
                    id_user:id_user,
                    token:token,
                    ip: ip.address
                }

                var query = "INSERT INTO ?? SET ?";
                var table = ['access_token'];

                query = mysql.format(query, table);
                connection.query(query, data, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        res.json({
                            success:true,
                            message:'Generate Token Succesfully',
                            token:token,
                            curntUser:data.id_user
                        });
                    }
                })


            }else{
                res.json({"Error": true, "Message":"Username or Password is Invalid"});
            }
        }
    })

}

exports.securePage = function(req,res){
    response.ok("This Page Just For Have Token", res);
}