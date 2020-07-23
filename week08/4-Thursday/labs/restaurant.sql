CREATE TABLE restaurant (
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar,
    distance integer,
    stars integer, 
    category varchar, 
    favoriteDish varchar, 
    doesTakeout boolean,
    lastVisit date    
)