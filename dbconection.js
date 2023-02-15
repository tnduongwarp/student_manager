var mysql = require('mysql2');
var connection = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: 'duong',
    database: 'demo'

});
module.exports = connection;