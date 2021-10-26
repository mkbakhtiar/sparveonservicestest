const jwt = require('jsonwebtoken');
const config = require('../config/secret');

function verifikasi(){
    return function(req, rest, next){
        // var tokenWithBearer = req.headers.authorization;
        return rest.status(401).send({auth:false, message:'Token is Not Registered'});
        // if(tokenWithBearer ){
        //     var token = tokenWithBearer.split(' ')[1];
        //     //verifikasi
        //     jwt.verify(token, config.secret, function(err,decoded){
        //         if(err){
        //             return res.status(401).send({auth:false, message:'Token is Not Registered'});
        //         }else{
        //             next();
        //         }
        //     })
        // }else{
        //     return res.status(401).send({auth:false, message:'Token is Not Registered'});
        // }
    }
}


module.exports = verifikasi