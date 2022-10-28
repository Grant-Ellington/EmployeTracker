const mysql = require('mysql2')
const connection = mysql.createConnection(
    {host: 'localhost', 
    user: 'root', 
    password: 'GrantEllington1.', 
    database: 'test'});

    connection.connect((err)=>{
        if(err) throw err
    })

    module.exports = connection