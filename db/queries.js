const init = require('../server');
const connection = require('./connections');



function viewAllDepartments () {
   let viewAllSQL = connection.promise().query('SELECT * FROM department') 
    return viewAllSQL

}

function viewAllRoles () {
    let viewAllSQL = connection.promise().query('SELECT * FROM role')
    return viewAllSQL

}

function viewAllEmployees() {
    let viewAllSQL = connection.promise().query('SELECT * FROM role')
    return viewAllSQL
}

function addDepartment(data){
    let sql = `INSERT INTO department( id, department_name) VALUES(6, ${data.departmentName});`
    
    return connection.promise().query(sql)

}

function addRole() {
    let sql = `INSERT INTO role(id, title, salary, depratment_id) VALUES( 6, ` 

    return connection.promise().query(sql)
}
function addEmployee () {

}

function addEmployeeRole(){

}


module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, addRole, addEmployee, addEmployeeRole, addDepartment
}