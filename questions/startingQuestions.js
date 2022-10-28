const startingQuestion = [
    {
        type: 'list',
        name: 'options',
        message: 'Choose from the following options.',
        choices:[
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role'
        ]
    }
];

module.exports = startingQuestion;