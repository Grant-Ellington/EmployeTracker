const connection = require('./connections');


function viewAllDepartments () {
   let viewAllSQL = connection.promise().query('SELECT department.id AS id, department.department_name AS department FROM department');
   console.log(viewAllSQL)
    return viewAllSQL
}

function viewAllRoles () {
    let viewAllSQL = connection.promise().query('SELECT * FROM role')
    return viewAllSQL
}

function viewAllEmployees() {
    let viewAllSQL = connection.promise().query('SELECT * FROM employee')
    return viewAllSQL
}

function addRole() {

}
function addEmployee () {

}

function addEmployeeRole(){

}


module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, addRole, addEmployee, addEmployeeRole 
}