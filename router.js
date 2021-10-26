'use strict';

module.exports = function(app){
    var jsonC = require('./controller');

    app.route('/').get(jsonC.index);
    app.route('/show').get(jsonC.showUser);
    app.route('/show/:id').get(jsonC.showById);
    app.route('/post').post(jsonC.postData);
}