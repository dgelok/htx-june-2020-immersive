CREATE TABLE categories (
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(50)
);


INSERT INTO categories VALUES 
(DEFAULT, 'bbq'),
(DEFAULT, 'mexican'),
(DEFAULT, 'tapas'),
(DEFAULT, 'greek'),
(DEFAULT, 'chinese'),
(DEFAULT, 'ethiopian'),
(DEFAULT, 'thai'),
(DEFAULT, 'vietnamese'),
(DEFAULT, 'german');

CREATE TABLE dishes (
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(100),
    category integer REFERENCES categories(id),
    foodDescription varchar(300),
    price integer,
    imageURL varchar(300)
);