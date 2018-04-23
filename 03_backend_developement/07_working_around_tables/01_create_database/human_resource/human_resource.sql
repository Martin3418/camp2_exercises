CREATE TABLE Region (
  id serial CONSTRAINT constraint_Region_id PRIMARY KEY,
  name varchar NOT NULL
);

CREATE TABLE Country (
  id serial CONSTRAINT constraint_Country_id PRIMARY KEY,
  code varchar(2) NOT NULL,
  name varchar NOT NULL,
  region_id int4 NOT NULL
);

CREATE TABLE Location (
  id serial CONSTRAINT constraint_Location_id PRIMARY KEY,
  street_address varchar NOT NULL,
  postal_code varchar NOT NULL,
  city varchar NOT NULL,
  state varchar NULL,
  country_id int4 NOT NULL
);

CREATE TABLE Job (
  id serial CONSTRAINT constraint_Job_id PRIMARY KEY,
  code varchar NOT NULL,
  title varchar NOT NULL,
  min_salary float4 NOT NULL,
  max_salary float4 NOT NULL
);

CREATE TABLE Job_Grade (
  id serial CONSTRAINT constraint_Job_Grade_id PRIMARY KEY,
  level varchar(1) NOT NULL,
  lowest_salary float4 NOT NULL,
  highest_salary float4 NOT NULL
);

CREATE TABLE Job_History (
  id serial CONSTRAINT constraint_Job_History_id PRIMARY KEY,
  employee_id int4 NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  job_id int4 NOT NULL,
  department_id int4 NOT NULL
);

CREATE TABLE Department (
  id serial CONSTRAINT constraint_Department_id PRIMARY KEY,
  name varchar NOT NULL,
  manager_id int4 NOT NULL,
  location_id int4 NOT NULL
);

CREATE TABLE Employee (
  id serial CONSTRAINT constraint_Employee_id PRIMARY KEY,
  first_name varchar NOT NULL,
  last_name varchar NOT NULL,
  email varchar NOT NULL,
  phone_number varchar NOT NULL,
  hire_date date NOT NULL,
  job_id int4 NOT NULL,
  salary float4 NOT NULL,
  commission_pct float4 NOT NULL,
  manager_id int4 NULL,
  department_id int4 NOT NULL
);
