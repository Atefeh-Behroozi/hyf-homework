USE `Meal_Sharing`;
SELECT 
    `id`, `price`, `title`
FROM
    `meal`;
SELECT * FROM `meal`;
INSERT INTO
    `meal` (
        `id`,
        `title`,
        `description`,
        `location`,
        `price`,
        `when`,
        `max-reservations`,
        `created-date`
    )
VALUES
    (
        1,
        `Pasta`,
        `Pasta with chiken and cheese`,
        `Hvidovre torv 8`,
        200,
        `2023.06.03`,
        6,
        `2023.06.02`
    );
SELECT 
    *
FROM
    `meal`
WHERE
    `id` = 1;
UPDATE meal 
SET 
    max_reservations = 7,
    price = 250
WHERE
    id = 1;
DELETE FROM meal WHERE id = 1;
SELECT * FROM reservation;
INSERT INTO
    reservation (
        `id`,
        `number-of-guests`,
        `meal_id`,
        `contact-phonenumber`,
        `contact-email`,
        `created-date`
    )
VALUES
    (
        1,
        2,
        1,
        '71328789',
        'ati22@gmail.com',
        '2023.06.02'
    );
SELECT 
    *
FROM
    `reservation`
WHERE
    `id` = 1;
UPDATE `reservation` 
SET 
    `number-of-guests` = 10
WHERE
    `id` = 1;
DELETE FROM `reservation` WHERE `id` = 1;
SELECT * FROM review;
INSERT INTO
    review (
        `id`,
        `title`,
        `meal_id`,
        `description`,
        `stars`,
        `created-date`
    )
VALUES
    (1, 'Great', 1, `Perfect meal!`, 5, CURDATE());
SELECT * FROM `review` WHERE `id` = 1;
UPDATE `review` 
SET 
    `description` = 'The food is so great and tasty'
WHERE
    `id` = 1;