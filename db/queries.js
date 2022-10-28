const connection = require('./connections');

function viewAllDepartments () {
    connection.promise().query('SELECT * FROM department')
}

module.exports = { viewAllDepartments, 
}