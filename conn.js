var mysql = require('mysql');

//create DBConnection

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sparveontest'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql Connected');
});

module.exports = conn;