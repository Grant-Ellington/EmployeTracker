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

module.exports = updateEmployeeRole;