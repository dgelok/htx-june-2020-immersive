

-- -- list restaurants by the closest distance.
-- SELECT 
--     *
-- FROM
--     restaurant
-- ORDER BY
--     distance;


-- -- list the top 2 restaurants by distance.
-- SELECT 
--     *
-- FROM
--     restaurant
-- ORDER BY
--     distance LIMIT 2;


-- -- list the top 2 restaurants by stars.
-- SELECT 
--     *
-- FROM
--     restaurant
-- ORDER BY
--     stars DESC LIMIT 2;

-- -- list the top 2 restaurants by stars where the distance is less than 2 miles.
-- SELECT 
--     *
-- FROM
--     restaurant
-- WHERE
--     distance <= 2
-- ORDER BY
--     stars DESC LIMIT 2

-- -- count the number of restaurants in the db.
-- SELECT 
--     COUNT (*)
-- FROM
--     restaurant;

-- -- count the number of restaurants by category.
-- SELECT 
--     COUNT (*)
-- FROM
--     restaurant
-- WHERE
--     category = 'japanese';


-- -- get the average stars per restaurant by category.
-- SELECT 
--     AVG (stars)
-- FROM
--     restaurant
-- WHERE
--     category = 'BBQ';


-- -- get the max stars of a restaurant by category.
-- SELECT 
--     MAX (stars)
-- FROM
--     restaurant
-- WHERE
--     category = 'BBQ';