'use strict';

var response = require('./response');
var connection = require('./conn');

exports.index = function(req, res){
    response.ok("Application is running!");
};