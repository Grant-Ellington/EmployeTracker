const init = require('../server');
const connection = require('./connections');


//functions to be called for all SQL queries
function viewAllDepartments () {
   let viewAllSQL = connection.promise().query('SELECT * FROM department') 
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

function addDepartment(data){

    console.log(data.departmentName)
    let sql = `INSERT INTO department( department_name) VALUES(${data});`

    console.log(sql)
    
    return connection.promise().query(sql)

}

function addRole(inputs) {

    console.log(inputs)
    let sql = `INSERT INTO role( title, salary, department_id) VALUES( '${inputs.roleName}', ${inputs.roleSalary}, ${inputs.roleDepartment})` 

   return connection.promise().query(sql)
}
function addEmployee (inputs) {
    let sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES( '${inputs.employeeFirstName}', '${inputs.employeeLastName}', ${inputs.employeeRole}, ${inputs.employeeManager})`

    return connection.promise().query(sql)

}

function selectEmployeeNames(){
    let sql = 'SELECT first_name, last_name FROM employee;'
    return connection.promise().query(sql)

}
function selectRoleName (){
    let sql ='SELECT id,title FROM role'
    return connection.promise().query(sql)
 }

 function updateRole (inputs){

    console.log(inputs)
    let sql = `UPDATE employee SET role_id = ${inputs.roleOptions} WHERE last_name = '${inputs.nameOptions};'`

    return connection.promise().query(sql)
 }

module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, addRole, addEmployee, addDepartment, selectEmployeeNames, selectRoleName, updateRole
}