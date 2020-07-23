

-- create a database
-- CREATE DATABASE cohort2020v2;
-- DROP TABLE students; 
-- -- create a table

-- CREATE TABLE students (
--     id SERIAL NOT NULL PRIMARY KEY,
--     studentname varchar,
--     website varchar,
--     github_username varchar UNIQUE NOT NULL ,
--     points integer DEFAULT 0 CHECK (points >= 0),
--     gender char(1),
--     cohort_start_data date NOT NULL,
--     graduated boolean DEFAULT FALSE
-- );

-- ALTER TABLE students 
-- ADD new_column1 integer DEFAULT 2;
ALTER TABLE students 
ALTER COLUMN new_column varchar NOT NULL;

-- create values in the table

-- CREATE TABLE school (
    
--     id SERIAL NOT NULL PRIMARY KEY,
--     school_name varchar
-- );