DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS "users" CASCADE;
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE categories
(
    id    SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE "users"
(
    id    SERIAL PRIMARY KEY,
    name  VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    img VARCHAR NOT NULL
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    img  VARCHAR NOT NULL,
    date timestamp,
    likes INT NOT NULL,
    userId INT NOT NULL,
    categoryId INT NOT NULL
);

ALTER TABLE ONLY posts
    ADD CONSTRAINT fk_user_id FOREIGN KEY (userId) REFERENCES "users" (id),
    ADD CONSTRAINT fk_category_id FOREIGN KEY (categoryId) REFERENCES "categories" (id);

INSERT INTO categories VALUES (1, 'Fun');
INSERT INTO categories VALUES (2, 'Wierd');
INSERT INTO categories VALUES (3, 'Ninja');

INSERT INTO "users"
(id, name, email, password, img) VALUES (1, 'Gyuszi', 'szgybenec@gamil.com', '1234', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zcJ0i7HDB64UCj8ROPXIwW7FeDViAzmAHoq3Ix8FWIj0i_M2CrHNqnYgPKSsjfI7MAU&usqp=CAU');
SELECT pg_catalog.setval('users_id_seq', 2, true);

INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (1, 'Junky Times', 'https://i.pinimg.com/236x/a5/cc/a2/a5cca250ab647f5a99b733d3b2444324.jpg', now(), 4, 1, 2);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (2, 'Sekiro', 'https://i.pinimg.com/236x/01/34/1a/01341a0232b3883c61a8c3b314f3d61c.jpg', now(), 14, 1, 3);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (3, 'xdddd', 'https://i.pinimg.com/564x/63/40/1f/63401fa62ce9ae1f57257a6e02145c5c.jpg', now(), 6, 1, 1);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (4, 'What the dog doin?', 'https://i.pinimg.com/236x/ed/ca/2f/edca2faf20c7d513a779ee4318417fe8.jpg', now(), 23, 1, 1);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (5, 'O.O', 'https://i.pinimg.com/236x/21/b2/1b/21b21bf49168f076b458b58463979759.jpg', now(), 1, 1, 2);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (6, 'uwuU', 'https://i.pinimg.com/236x/38/1c/63/381c630d415b3ab964551faad6e5971e.jpg', now(), 21, 1, 2);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (7, 'Fun Times', 'https://i.pinimg.com/236x/f2/16/c1/f216c190713e629657cbc5e2bc0f332e.jpg', now(), 44, 1, 1);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (8, 'Ninjazz', 'https://i.pinimg.com/236x/a9/20/28/a9202818e5eac8d774c420a979ab7354.jpg', now(), 7, 1, 3);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (9, 'Funneh', 'https://i.pinimg.com/236x/8f/7b/dc/8f7bdc166b6efadd54f7c59026ac7120.jpg', now(), 8, 1, 1);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (10, 'Sekiro ultimate', 'https://i.pinimg.com/236x/6a/68/95/6a68957dd78e244b3c31b99071b9e662.jpg', now(), 9, 1, 3);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (11, 'Minimalist wierdness', 'https://i.pinimg.com/236x/4d/ba/e4/4dbae4a8a15e8a601559e6a1ce9db785.jpg', now(), 42, 1, 2);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (12, 'ShtPost', 'https://i.pinimg.com/236x/1f/b0/4b/1fb04b9d8c6aa9389548c6fdb902f033.jpg', now(), 23, 1, 1);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (13, 'Nani', 'https://i.pinimg.com/236x/73/61/2d/73612d2d9aecab0c158b80855eb0c790.jpg', now(), 54, 1, 3);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (14, 'Omaiva Mo', 'https://i.pinimg.com/236x/7b/73/21/7b732167760cc245ee45ed8ca6362ce9.jpg', now(), 77, 1, 3);
SELECT pg_catalog.setval('posts_id_seq', 15, true);