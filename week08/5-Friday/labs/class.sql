-- CREATE TABLE author (
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );

-- -- reference the author!
-- CREATE TABLE articles (
--     id SERIAL PRIMARY KEY,
--     title varchar(150),
--     author_id integer REFERENCES author(id) 
-- );


-- INSERT INTO author VALUES 
-- (DEFAULT, 'Micah'),
-- (DEFAULT, 'Jeremy'),
-- (DEFAULT, 'Michael'),
-- (DEFAULT, 'Dan'),
-- (DEFAULT, 'Woody'),
-- (DEFAULT, 'RJ'),
-- (DEFAULT, 'Daniel'),
-- (DEFAULT, 'Cainan'),
-- (DEFAULT, 'Chris');


-- try to add an article without an author

-- INSERT INTO articles VALUES
-- (DEFAULT, 'JS Prototypes', 4),
-- (DEFAULT, 'Intro to SQL', 4),
-- (DEFAULT, 'EJS and Other Forms of Insanity', 6),
-- (DEFAULT, 'Express is My best Friend', 1),
-- (DEFAULT, 'CSS Tricks for the Developing Developer', 3),
-- (DEFAULT, 'GUIs, IDEs, and Me', 5),
-- (DEFAULT, 'Python Unit Testing', 5),
-- (DEFAULT, 'OOP and Big O Factoring', 2),
-- (DEFAULT, 'Solutions and Solutions', 7);

-- INSERT INTO author VALUES
-- (DEFAULT, 'JJ Watt');

-- SELECT author.id AS author_id, title, name

-- SELECT *
-- FROM author 
-- INNER JOIN articles ON author.id = articles.author_id
-- WHERE author_id = 4;

-- SELECT 
--     name, count(articles.id)
-- FROM 
--     author 
-- INNER JOIN 
--     articles ON author.id = articles.author_id
-- GROUP BY
--     author.name;

-- CREATE TABLE groups (
--     id SERIAL PRIMARY KEY,
--     name varchar(100)
-- );

-- CREATE TABLE members (
--     id SERIAL PRIMARY KEY,
--     member varchar(50)
-- );


-- INSERT INTO groups VALUES
-- (DEFAULT, 'Houston Javascript Meetup'),
-- (DEFAULT, 'PyLadies'),
-- (DEFAULT, 'Girl Develop It'),
-- (DEFAULT, 'Houston Web Design Group');



-- INSERT INTO members VALUES
-- (DEFAULT, 'Michael'),
-- (DEFAULT, 'Dan'),
-- (DEFAULT, 'Woody'),
-- (DEFAULT, 'Micah'),
-- (DEFAULT, 'RJ'),
-- (DEFAULT, 'Jeremy'),
-- (DEFAULT, 'Chris'),
-- (DEFAULT, 'Cainan');


-- CREATE TABLE membership (
--     id SERIAL PRIMARY KEY,
--     group_id integer REFERENCES groups(id),
--     member_id integer REFERENCES members(id)
-- );

-- INSERT INTO membership VALUES 
-- (DEFAULT, 1, 1),
-- (DEFAULT, 1, 2),
-- (DEFAULT, 1, 6),
-- (DEFAULT, 2, 1),
-- (DEFAULT, 2, 2),
-- (DEFAULT, 3, 1),
-- (DEFAULT, 3, 4),
-- (DEFAULT, 3, 5),
-- (DEFAULT, 4, 1),
-- (DEFAULT, 4, 3),
-- (DEFAULT, 4, 4),
-- (DEFAULT, 4, 5),
-- (DEFAULT, 4, 6),
-- (DEFAULT, 4, 7);


SELECT
    member, name 
FROM 
    groups
INNER JOIN 
    membership ON groups.id = group_id                  
INNER JOIN
    members ON members.id = member_id
WHERE
    groups.id = 4;