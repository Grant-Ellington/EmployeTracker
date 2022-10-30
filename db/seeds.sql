USE test;

INSERT INTO department(id, department_name)
VALUES (001,'cast'),(002, 'crew');

INSERT INTO role(id, title, salary, department_id )
VALUES (001, 'contestant', 10000, 001), (002, 'host', 100000, 002), (003, 'director',200000, 002),(004, 'editor', 80000, 002),(005, 'manager', 200000, 002);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (001, 'Violet', "Tchaki", 001, 005), (002, 'Trixie', 'Mattel', 001, 005), (003, 'RuPaul', 'Charles', 002, 005), (004, 'Jim', 'Halper', 003, 005), (005, 'Dwight', 'Schrute', 005, null), (006, 'Pam', 'Halper', 004, 005);
        