USE test;

INSERT INTO department( department_name)
VALUES ('cast'),('crew');

INSERT INTO role( title, salary, department_id )
VALUES ( 'contestant', 10000, 001), ( 'host', 100000, 002), ( 'director',200000, 002),( 'editor', 80000, 002),('manager', 200000, 002);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ( 'Violet', "Tchaki", 001, 005), ( 'Trixie', 'Mattel', 001, 005), ( 'RuPaul', 'Charles', 002, 005), ('Jim', 'Halper', 003, 005), ( 'Dwight', 'Schrute', 005, null), ('Pam', 'Halper', 004, 005);
    