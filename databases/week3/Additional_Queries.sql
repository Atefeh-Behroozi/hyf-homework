INSERT INTO
    `meal` (
        `id`,
        `title`,
        `description`,
        `location`,
        `when`,
        `price`,
        `max-reservations`,
        `created-date`
    )
VALUES
    (
        2,
        'Spicy Thai Noodles',
        'Delicious stir-fried noodles with a perfect blend of spices and fresh vegetables, topped with your choice of protein.',
        'Amager',
        'Available all day',
        300,
        7,
        '2023-06-02'
    ),
    (
        3,
        'Grilled Salmon Steak',
        'A mouthwatering grilled salmon steak seasoned with herbs and served with a side of roasted vegetables and lemon butter sauce.',
        'Valby',
        'Dinner only',
        400,
        10,
        '2023-05-28'
    ),
    (
        4,
        'Mediterranean Mezze Platter',
        'An assortment of flavorful Mediterranean appetizers, including hummus, falafel, stuffed grape leaves, tabbouleh, and pita bread.',
        'Nørreport',
        'Lunch and dinner',
        500,
        8,
        '2023-05-25'
    );

INSERT INTO
    `reservation` (
        `id`,
        `number-of-guests`,
        `meal_id`,
        `created-date`,
        `contact-phonenumber`,
        `contact-email`
    )
VALUES
    (2, 2, 2, CURDATE(), '71355456', 'axel@gmail.com'),
    (
        3,
        5,
        3,
        CURDATE(),
        '71356767',
        'keren@gmail.com'
    ),
    (4, 3, 4, CURDATE(), '71347689', 'lili@gmail.com');

INSERT INTO
    `review` (
        `id`,
        `title`,
        `description`,
        `meal_id`,
        `stars`,
        `created_date`
    )
VALUES
    (
        2,
        'Great',
        'Flavorful, aromatic, vibrant, spicy, savory, well-balanced.',
        1,
        3,
        '2023-06-04'
    ),
    (
        3,
        'So delicious',
        'Succulent, smoky, tender, flavorful, grilled, buttery.',
        2,
        4,
        '2023-05-30'
    ),
    (
        4,
        'Perfect',
        'Fresh, diverse, flavorful, wholesome, appetizing.',
        3,
        2,
        '2023-05-28'
    );

SELECT
    title,
    price
FROM
    meal
WHERE
    price < 90;

SELECT
    title
FROM
    meal
WHERE
    title LIKE '%Rød grød med%';

SELECT
    *
FROM
    meal
LIMIT
    5;

SELECT
    meal.title,
    review.stars
FROM
    meal
    RIGHT JOIN review ON meal.id = review.meal_id
WHERE
    stars = 4;

SELECT
    meal.title,
    reservation.created_date
FROM
    meal
    RIGHT JOIN reservation ON meal.id = reservation.meal_id
WHERE
    meal.id = 3
ORDER BY
    created_date DESC;

SELECT
    meal.title,
    AVG(stars) AS average_score
FROM
    meal
    RIGHT JOIN review ON meal.id = review.meal_id
GROUP BY
    meal.title
ORDER BY
    AVG(stars) DESC;