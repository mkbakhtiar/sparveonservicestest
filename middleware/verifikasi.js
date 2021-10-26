const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const config = require('../config/secret');

function verifikasi(){
    return function(req, res, next){
        var tokenWithHeader = req.headers.authorization;
        if(tokenWithHeader){
            var token = tokenWithHeader.split('.')[1];
            //verifikasi
            jwt.verify(token, config.secret, function(err,decoded){
                if(err){
                    return res.status(401).send({auth:false, message:'Token is Not Registered'});
                }else{
                    next();
                }
            })
        }else{
            return res.status(401).send({auth:false, message:'Token is Not Registered'});
        }
    }
}


module.exports = verifikasi;