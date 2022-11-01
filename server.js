// call once somewhere in the beginning of the app
const cTable = require('console.table');
const inquirer = require('inquirer');
 
// requires for questions
const addDepartmentQuestions = require('./questions/addDepartmentQuestions');
const addEmployeeQuestions = require('./questions/addEmployeeQuestions');
const addRoleQuestions = require('./questions/addRoleQuestions');
const startingQuestions = require('./questions/startingQuestions');

//require for query functions
const queries = require('./db/queries')
//init function to start application
function init (){

  //starting questions which uses if else statements to execute different functionalities 
  inquirer.prompt(startingQuestions).then((data)=>{
    if(data.options === 'view all departments'){
      queries.viewAllDepartments().then((data)=>{
        alldepartments = data[0]
        console.table(alldepartments)
        init();
      })
      //allroles- uses seleect all queries  via queries file 
    }else if(data.options === 'view all roles'){
      queries.viewAllRoles().then((data)=> {
        let sql = data[0]
        console.table(sql)
        init()
      })
    }else if(data.options === 'view all employees'){
      queries.viewAllEmployees().then(data=>{
        let sql = data[0]
        console.table(sql)
        init();
      })
      //uses questions to add departments/role/ employee.
    }else if(data.options === 'add a department') {
      inquirer.prompt(addDepartmentQuestions).then((data)=> {
        //console.log(JSON.stringify(data.departmentName) + 'help')
        queries.addDepartment(JSON.stringify(data.departmentName))// needs strigify because coming back undefined
        init();
      })
    }else if(data.options === 'add a role'){
      inquirer.prompt(addRoleQuestions).then((data)=>{
        let inputs = data
      queries.addRole(inputs)
      init();
      })
    } else if(data.options === 'add an employee'){
      inquirer.prompt(addEmployeeQuestions).then((data)=>{
        let inputs = data
        queries.addEmployee(inputs)
        init();
      })
    }else if(data.options === 'update an employee role'){
      queries.selectRoleName().then((data)=>{
        let options = data[0]
        let roleArr = []
        options.forEach((options)=>roleArr.push(`${options.id} `))//creates template literal for terminal diplay of options
        return roleArr
      }).then((data)=>{
        roleOptions = data
        queries.selectEmployeeNames().then((data)=>{
          let options = data[0]
          let employeeArr = []
          options.forEach((options)=>employeeArr.push(`${options.last_name}`))// same as previous but form names
          questionArr = [employeeArr, roleOptions]
          return questionArr
        }).then((data)=>{
          let questionArr = data
          inquirer.prompt([// the question array for prompt on what to update
                            {
                              type: 'list',
                              name: 'nameOptions',
                              message: 'Choose the employee you woild like to update',
                              choices: questionArr[0]
                             },
                             {
                              type: 'list',
                              name: 'roleOptions',
                              message: 'Choose which role they will will change',
                              choices: questionArr[1]
                             }
            ]).then((data)=>{
              let inputs = data
              queries.updateRole(inputs)//query which updates
              init();
            })
        })
        
      })
    }
  })
}



init();

// switch (data.options) {
//   case 'view all departments':
//     daodnadas
//     break;
//   case 'view all roles':
//     sdkfhsjdkf
//     break
//   default:
//     break;
// }