CREATE DATABASE likeme;
/c likeme;

CREATE TABLE posts (id SERIAL PRIMARY KEY NOT NULL, titulo VARCHAR(25) NOT NULL, img VARCHAR(1000) NOT NULL,
descripcion VARCHAR(255) NOT NULL, likes INT NOT NULL);


INSERT INTO posts (titulo, img, descripcion, likes)
VALUES('Omar Vizquel', 'https://www.beaconjournal.com/gcdn/presto/2021/01/21/NABJ/f5e55e98-9b90-4c29-9eb2-d9ba775f2769-AP04081107213.jpg?width=660&height=847&fit=crop&format=pjpg&auto=webp','jugador venezolano de la mlb posicion SS', 100);
INSERT INTO posts (titulo, img, descripcion, likes)
VALUES ();
INSERT INTO  posts (titulo, img, descripcion, likes)
VALUES ();
INSERT INTO  posts (titulo, img, descripcion, likes) 
VALUES ();

SELECT * FROM posts;