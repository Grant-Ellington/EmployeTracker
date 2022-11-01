//questions for adding an employee

const addEmployeeQuestions = [
    {
        type: 'input',
        name: 'employeeFirstName',
        message: "Please enter the employee's first name."
    },
    {
        type: 'input',
        name: 'employeeLastName',
        message: "Please enter the employee's last name."
    },
    {
        type: 'input',
        name: 'employeeRole',
        message: "Please enter the employee's role."
    },
    {
        type: 'input',
        name: 'employeeManager',
        message: "Please enter the employee's manager."
    }
]

module.exports = addEmployeeQuestions