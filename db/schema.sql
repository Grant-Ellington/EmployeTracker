DROP DATABASE IF EXISTS test;
CREATE DATABASE test;
USE test;

CREATE TABLE department (
    id INT,
    department_name VARCHAR(30)
);

CREATE TABLE role (
    id INT,
    title VARCHAR(30) ,
    salary DECIMAL(10, 2),
    department_id INT
);

CREATE TABLE employee(
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);
