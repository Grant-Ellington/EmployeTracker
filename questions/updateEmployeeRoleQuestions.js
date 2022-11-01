const updateEmployeeRole = [
    {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter the id of the employee you wish to update'
    },
    {
        type: 'input',
        name: 'newRole',
        message: "Please enter the employee's new role."
    }
]

// When the user selects update employee role
// They see the list of employees and chooses one
//Once they choose their employee, we need to find that employee in the SQL database and get their id
// WE show them all the roles and they choose which role should be the one assigned to that employee
// Once we get the role, then we can call the update employee sql code 
// UPDATE employee SET role_id = rolevariable WHERE id = employeevariable

/*
viewAllEmployee().then(data => {
    let employee = [data]
    inquirer.prompt([{question here choices:employee}]).then(response => {
        let chosenEmp = response.name
        viewAllRoles().then(data => {
            let roles = [data]
            inquirer.prompt([{question here choices: roles}]).then(reponse => {
                let chosenRole = response.name
                updateRole(chosenEmp, chosenRole)
            })
        })
    })
})

 */

module.exports = updateEmployeeRole;