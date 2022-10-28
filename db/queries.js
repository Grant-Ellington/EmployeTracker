const connection = require('./connections');

function viewAllDepartments () {
   return connection.promise().query('SELECT * FROM department') 
}

module.exports = { viewAllDepartments, 
}