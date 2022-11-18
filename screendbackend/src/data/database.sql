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

INSERT INTO categories VALUES (1, 'Nature');
INSERT INTO categories VALUES (2, 'Abstract');
INSERT INTO categories VALUES (3, 'Ninja');

INSERT INTO "users"
(id, name, email, password, img) VALUES (1, 'Gyuszi', 'szgybenec@gamil.com', '1234', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zcJ0i7HDB64UCj8ROPXIwW7FeDViAzmAHoq3Ix8FWIj0i_M2CrHNqnYgPKSsjfI7MAU&usqp=CAU');
SELECT pg_catalog.setval('users_id_seq', 2, true);

INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (1, 'Junky Times', 'https://i.pinimg.com/236x/5c/ea/85/5cea85f1551b21bcc52eb667e40eeedd.jpg', now(), 4, 1, 2);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (2, 'Sekiro', 'https://i.pinimg.com/236x/01/34/1a/01341a0232b3883c61a8c3b314f3d61c.jpg', now(), 14, 1, 3);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (3, 'xdddd', 'https://i.pinimg.com/236x/80/be/ce/80bece137a38be5c9fc62d7b4db4dcf4.jpg', now(), 6, 1, 1);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (4, 'What the dog doin?', 'https://i.pinimg.com/236x/b6/d4/31/b6d43146b0c987a5a40c14536344bb7d.jpg', now(), 23, 1, 1);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (5, 'O.O', 'https://i.pinimg.com/236x/b5/ed/f1/b5edf1b0ec30c194f7516946960bf4b8.jpg', now(), 1, 1, 2);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (6, 'uwuU', 'https://i.pinimg.com/236x/68/9f/5b/689f5bcdf3c6886b98d02d32088466b8.jpg', now(), 21, 1, 2);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (7, 'Fun Times', 'https://i.pinimg.com/236x/be/6b/61/be6b612ba63f00ed8de4a9ff5c6d38d1.jpg', now(), 44, 1, 1);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (8, 'Ninjazz', 'https://i.pinimg.com/236x/a9/20/28/a9202818e5eac8d774c420a979ab7354.jpg', now(), 7, 1, 3);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (9, 'Funneh', 'https://i.pinimg.com/236x/24/f7/88/24f7881cd48df20ab782864b7736c15b.jpg', now(), 8, 1, 1);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (10, 'Sekiro ultimate', 'https://i.pinimg.com/236x/6a/68/95/6a68957dd78e244b3c31b99071b9e662.jpg', now(), 9, 1, 3);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (11, 'Minimalist wierdness', 'https://i.pinimg.com/236x/e6/f6/b8/e6f6b8e5f8ad4ed8cba8fa7bf174f011.jpg', now(), 42, 1, 2);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (12, 'ShtPost', 'https://i.pinimg.com/236x/69/ad/cc/69adcc2f223c0a354f8de46c52fb8c3d.jpg', now(), 23, 1, 1);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (13, 'Nani', 'https://i.pinimg.com/236x/73/61/2d/73612d2d9aecab0c158b80855eb0c790.jpg', now(), 54, 1, 3);
INSERT INTO posts
(id, title, img, date, likes, userId, categoryId) VALUES (14, 'Omaiva Mo', 'https://i.pinimg.com/236x/7b/73/21/7b732167760cc245ee45ed8ca6362ce9.jpg', now(), 77, 1, 3);
SELECT pg_catalog.setval('posts_id_seq', 15, true);