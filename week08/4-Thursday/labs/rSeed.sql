
-- INSERT INTO restaurant VALUES 
--     (DEFAULT, 'Pho Ben', '3', '4', 'vietnamese', 'pho', TRUE, '2019-03-12'),
--     (DEFAULT, 'Fuddruckers', '1', '2', 'american', 'cheeseburger', TRUE, '2020-02-22'),
--     (DEFAULT, 'Japanieros', '3', '5', 'japanese', 'boat', FALSE, '2015-10-01'),
--     (DEFAULT, 'Keepers', '1', '4', 'japanese', 'chirashi', TRUE, '2020-01-10'),
--     (DEFAULT, 'Killins', '3', '2', 'BBQ', 'brisket', TRUE, '2020-07-12'),
--     (DEFAULT, 'McDonalds', '3', '1', 'burgers', 'ice cream', TRUE, '2020-07-12'),
--     (DEFAULT, 'Hugos', '8', '5', 'upscale', 'pork trotters', TRUE, '2020-07-12'),
--     (DEFAULT, 'Chick Fil-A', '9', '2', 'burgers', 'chicken sandwich', TRUE, '2020-07-12'),
--     (DEFAULT, 'BubbaBrisket', '22', '3', 'BBQ', 'ribs', TRUE, '2020-07-12');


-- -- The names of the restaurants that you gave a 5 stars to
-- SELECT
--     name
-- FROM 
--     restaurant
-- WHERE
--     stars = 5;


-- -- The favorite dishes of all 5-star restaurants
-- SELECT
--     favoritedish
-- FROM
--     restaurant
-- WHERE
--     stars = 5;


-- -- The the id of a restaurant by a specific restaurant name, say 'Moon Tower'
-- SELECT
--     id, name
-- FROM   
--     restaurant
-- WHERE
--     name = 'Japanieros';


-- -- restaurants in the category of 'BBQ'
-- SELECT
--     name
-- FROM
--     restaurant
-- WHERE
--     category = 'BBQ';

-- -- restaurants that do take out
-- SELECT
--     *
-- FROM
--     restaurant
-- WHERE
--     doesTakeout = TRUE;


-- -- restaurants that do take out and is in the category of 'BBQ'
-- SELECT
--     *
-- FROM
--     restaurant
-- WHERE
--     doesTakeout = TRUE and category = 'BBQ';

-- -- restaurants within 2 miles
-- SELECT
--     *
-- FROM
--     restaurant
-- WHERE
--     distance <= 2;


-- -- restaurants you haven't ate at in the last week
-- SELECT
--     *
-- FROM
--     restaurant
-- WHERE
--     lastvisit > '2020-07-16';

-- -- restaurants you haven't ate at in the last week and has 5 stars
-- SELECT
--     *
-- FROM
--     restaurant
-- WHERE
--     lastvisit < '2020-07-16' and stars = 5
