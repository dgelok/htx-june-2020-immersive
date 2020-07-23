

-- INSERT INTO students VALUES 
-- (DEFAULT, 'veronica', 'www.google.com', 'vlino2015', 5, 'F', '2020-07-23', FALSE),
-- (DEFAULT, 'Dave', 'www.google.com', 'vlino20151', 5, 'F', '2020-07-23', FALSE),
-- (DEFAULT, 'Woody', 'www.google.com', 'vlino20152', 5, 'F', '2020-07-23', FALSE),
-- (DEFAULT, 'Cainan', 'www.google.com', 'vlino20153', 5, 'F', '2020-07-23', FALSE);

-- INSERT INTO school VALUES 
-- (DEFAULT, 'digitalcrafts'),
-- (DEFAULT, 'flat iron'),
-- (DEFAULT, 'iron yard'),
-- (DEFAULT, 'general assembly'),
-- (DEFAULT, 'Codesmith'),
-- (DEFAULT, 'Code Dojo'),
-- (DEFAULT, 'Lambda');

-- DELETE FROM school WHERE id > 4;

-- INSERT INTO school VALUES (
--     DEFAULT, 'Lambda'
-- );

-- UPDATE school SET school_name = 'Flat Iron';

-- UPDATE students SET website = 'nerf@poit.com', points = 1;

-- INSERT INTO students (github_username, cohort_start_data) VALUES (
--     'quackquack', '2020-07-23'
-- );

-- SELECT 
--     studentname, points, gender 
-- FROM 
--     students 
-- WHERE 
--     points >= 9 and gender = 'F'

-- SELECT 
--     studentname, website 
-- FROM 
--     students 
-- WHERE 
--     website like '%le.com';

-- SELECT 
--     studentname, gender 
-- FROM 
--     students 
-- WHERE 
--     gender = NULL;


-- SELECT studentname, points FROM students ORDER BY points;
-- SELECT * FROM students ORDER BY points DESC;
-- SELECT * FROM students ORDER BY cohort_start_data, studentname;
-- SELECT * FROM students ORDER BY cohort_start_data, studentname LIMIT 2;
SELECT * FROM students ORDER BY cohort_start_data, studentname LIMIT 2;