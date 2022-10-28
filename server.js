// call once somewhere in the beginning of the app
const cTable = require('console.table');
const inquirer = require('inquirer');
 
// requires for questions
const addDepartmentQuestions = require('./questions/addDepartmentQuestions');
const addEmployeeQuestions = require('./questions/addEmployeeQuestions');
const addRoleQuestions = require('./questions/addRoleQuestions');
const startingQuestions = require('./questions/startingQuestions');
const updateEmployeeQuestions = require('./questions/updateEmployeeRoleQuestions');
const queries = require('./db/queries')
function init (){
  inquirer.prompt(startingQuestions).then((data)=>{
    if(data.options === 'view all departments'){
      queries.viewAllDepartments().then((data)=>{
        let department = [data]
        console.table(department)
      })
    }else if(data.options === 'view all roles'){
      console.log(data.options)
    }else if(data.options === 'view all employees'){
      console.log(data.options)
    }else if(data.options === 'add a department'){
      console.log(data.options)
    }else if(data.options === 'add a role'){
      console.log(data.options)
    }else if(data.options === 'add an employee'){
      console.log(data.options)
    }else if(data.options === 'add and employee role'){
      console.log(data.options)
    }else{
      console.log(data.options)
    }
  })
}

init();