--display the first name, last name, department number, and department name for each employee.
SELECT first_name, last_name, department_id, department.name
FROM employee
INNER JOIN department ON (department_id = department.id);

--display the first and last name, department, city, and state province for each employee.
SELECT first_name, last_name, department.name, location.city, location.state_province
FROM employee
INNER JOIN department ON (department_id = department.id)
INNER JOIN location ON (department.location_id = location.id);

--display the first name, last name, salary, and job grade for all employees.

--display the first name, last name, department number and department name, for all employees for departments 8 or 4.
SELECT emp.first_name, emp.last_name, emp.department_id, department.name
FROM employee as emp
INNER JOIN department ON (emp.department_id = department.id)
WHERE emp.department_id = 4 OR emp.department_id = 8;


--display those employees who contain a letter z to their first name and also display their last name, department, city, and state province.
SELECT first_name, last_name, department.name, location.city, location.state_province
FROM employee
INNER JOIN department ON (department_id = department.id)
INNER JOIN location ON (location_id = location.id)
WHERE first_name LIKE '%z%';

Write a query in SQL to display all departments including those where does not have any employee.

Write a query in SQL to display the first and last name and salary for those employees who earn less than the employee earn whose number is 83.

Write a query in SQL to display the first name of all employees including the first name of their manager.

Write a query in SQL to display the department name, city, and state province for each department.

Write a query in SQL to display the first name, last name, department number and name, for all employees who have or have not any department.
