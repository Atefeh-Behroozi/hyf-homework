SELECT name, email, title
FROM user_task
    INNER JOIN task ON task.id = user_task.task_id
    INNER JOIN user ON user.id = user_task.user_id
WHERE email LIKE '%@spotify.com%';
SELECT user.name, title, status.name
FROM user_task
INNER JOIN task ON task.id = user_task.task_id
INNER JOIN user ON user.id = user_task.user_id
INNER JOIN status ON status.id = task.status_id
WHERE user.name = 'Donald Duck'
AND status.name LIKE '%Not started%';
SELECT name, task.*
FROM task
INNER JOIN user_task ON task.id = user_task.task_id
INNER JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows'
AND MONTH(created) = 9;
SELECT DATE_FORMAT(created, '%Y-%m') AS month, COUNT(*) AS task_count
FROM task
GROUP BY month;