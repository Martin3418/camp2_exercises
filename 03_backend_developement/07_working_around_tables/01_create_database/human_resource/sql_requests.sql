SELECT * from country;
SELECT * from department;
SELECT * from employee;
SELECT * from job;
SELECT * from job_grade;
SELECT * from job_history;
SELECT * from location;
SELECT * from region;

--display full name (first and last name), and salary for those employees who earn below 6000
SELECT (first_name || ' ' || last_name) AS fullname, salary FROM employee WHERE salary < 6000;

--display first and last name, and department number for all employees whose last name is "McEwen".
SELECT first_name, last_name, department_id FROM employee WHERE last_name = 'McEwen';

--display all the information for all employees without any department number.
SELECT * FROM employee WHERE department_id = null;

--display all the information about the department Marketing.;
SELECT * FROM department AS dep WHERE dep.id = 2;

--display the full name (first and last), hire date, salary, and department number for those employees whose first name does not containing the letter M and make the result set in ascending order by department number.
SELECT (first_name || ' ' || last_name) AS fullname, hire_date, salary, department_id FROM employee as emp WHERE emp.first_name NOT LIKE '%' || 'M' || '%' AND emp.first_name NOT LIKE '%m%';

--display all the information of employees whose salary is in the range of 8000 and 12000 and commission is not null or department number is except the number 4, 12 and 7 and they have been hired before June 5th, 1987--.
SELECT * FROM employee WHERE salary BETWEEN 8000 AND 12000 AND ((commission_pct IS NOT NULL) OR department_id NOT IN (4, 12, 7)) AND hire_date < '2007-06-05';

--display the first and last name, and salary for those employees whose first name is ending with the letter m.
SELECT first_name, last_name from employee where right(first_name, 1) = 'm';
SELECT first_name, last_name from employee where first_name like '%m';

--display full name (first and last) name, and salary, for all employees whose salary is out of the range 7000 and 15000 and make the result set in ascending order by the full name.
SELECT first_name || ' ' || last_name AS fullname, salary from employee where salary < 7000 or salary > 15000 order by fullname asc;
SELECT first_name || ' ' || last_name AS fullname, salary from employee where salary not between 7000 and 15000 order by fullname asc;

--display the full name (first and last), job id and date of hire for those employees who was hired during November 5th, 2007 and July 5th, 2009.
SELECT first_name || ' ' || last_name AS fullname, job_id, hire_date from employee where hire_date between '2007-11-05' and '2009-07-05';

--display the full name (first and last name), and department number for those employees who works either in department 7 or 9.
SELECT first_name || ' ' || last_name AS fullname, department_id from employee where department_id in (7, 9);


--display the full name (first and last name), salary, and manager number for those employees who is working under a manager.
SELECT first_name || ' ' || last_name AS fullname, salary, manager_id from employee where manager_id is not null;


--display all the information for all employees who have the letters D, S, or N in their first name and also arrange the result in descending order by salary.
SELECT * from employee where first_name LIKE '%D%' OR first_name LIKE '%S%' OR first_name LIKE '%N%' order by salary desc;

--display the first and last name, and department number for those employees who holds a letter s as a 3rd character in their first name.
SELECT first_name, last_name, department_id from employee where strpos(first_name, 's') = 3;

--display the employee ID, first name, job id, and department number for those employees who is working except the departments 5, 3 and 8.
SELECT id, first_name, job_id, department_id from employee where department_id not in (5, 3, 8);

--display the employee Id, first name, job id, and department number for those employees whose department number equals 3, 4 or 9.
SELECT * FROM employee WHERE department_id in (3, 4, 9);

--display the ID for those employees who did two or more jobs in the past.
SELECT COUNT (*), employee_id FROM job_history group by employee_id HAVING count(*) > 1;

--display job ID, number of employees, sum of salary, and difference between highest salary and lowest salary for a job.
SELECT job_id, COUNT(*), sum (salary) as SUM_SALARY, MAX(salary) - MIN(salary) as DIFF_SALARIES
FROM employee GROUP BY job_id;

SELECT * FROM employee WHERE job_id = 19;
SELECT MIN(salary), MAX(salary) FROM employee WHERE job_id = 19;
SELECT  FROM employee WHERE job_id = 19;
