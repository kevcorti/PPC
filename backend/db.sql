-- CITY
INSERT INTO "City" VALUES (1, 'Guayaquil'), (2, 'Santo Domingo'), (3, 'Machala'), 
(4, 'Durán'), (5, 'Manta'), (6, 'Portoviejo'), (7, 'Esmeraldas'), (8, 'Quevedo'), 
(9, 'Milagro'), (10, 'La Libertad'), (11, 'Babahoyo'), (12, 'Daule'), (13, 'Chone'), 
(14, 'Pasaje'), (15, 'Santa Rosa'), (16, 'Huaquillas'), (17, 'El Carmen'), (18, 'Montecristi'), 
(19, 'Samborondón'), (20, 'Jipijapa'), (21, 'Santa Elena'), (22, 'Buena Fe'), (23, 'Ventanas'), (24, 'Velasco Ibarra'), 
(25, 'El Triunfo'), (26, 'Salinas'), (27, 'General Villamil'), (28, 'Vinces'), (29, 'La Concordia'), (30, 'Rosa Zárate'), 
(31, 'Balzar'), (32, 'Naranjito'), (33, 'Naranjal'), (34, 'San Lorenzo'), (35, 'El Guabo'), (36, 'Pedernales'), 
(37, 'Bahía de Caráquez'), (38, 'Pedro Carbo'), (39, 'Yaguachi'), (40, 'Calceta'), (41, 'Arenillas'), (42, 'Jaramijó'), 
(43, 'Valencia'), (44, 'Atacames'), (45, 'Piñas');

-- ROLES
INSERT INTO "Roles" VALUES (1, 'USUARIO'), (2, 'FOTÓGRAFO'), (3, 'ADMINISTRADOR'), (4, 'ARTISTA');

-- USERS
INSERT INTO "Users"("id_user", "email", "names", "biography" ,"id_rol", "password") VALUES (gen_random_uuid(), 'dterrero@espol.edu.ec', 'David Terreros', 'Usuario Normal',2, 1234), (gen_random_uuid(), 'blucas@espol.edu.ec', 'Bruno Lucas', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium non culpa vel sequi placeat ipsum rem saepe aliquid sunt delectus voluptas, et nulla excepturi deserunt ex suscipit exercitationem quasi?' ,2, 123467), (gen_random_uuid(), 'pmartinez@espol.edu.ec', 'Pedro Martinez', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium non culpa vel sequi placeat ipsum rem saepe aliquid sunt delectus voluptas, et nulla excepturi deserunt ex suscipit exercitationem quasi?', 1, 1234), (gen_random_uuid(), 'nsanchez@espol.edu.ec', 'Natasha Sanchez', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium non culpa vel sequi placeat ipsum rem saepe aliquid sunt delectus voluptas, et nulla excepturi deserunt ex suscipit exercitationem quasi?',2, 1234), (gen_random_uuid(), 'jcramirez@espol.edu.ec', 'Juan Calores Ramirez', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium non culpa vel sequi placeat ipsum rem saepe aliquid sunt delectus voluptas, et nulla excepturi deserunt ex suscipit exercitationem quasi?', 2, 1234);

-- URBAN ART CATEGORY
INSERT INTO "UrbanArtCategory"("id", "name", "description", "url_photo") VALUES 
(1, 'Festivales y Eventos Culturales', 'Lorem Ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'https://firebasestorage.googleapis.com/v0/b/graficapopular-4d17f.appspot.com/o/arteurbano%2Ffotomural.webp?alt=media&token=19c8a76b-2ecc-424a-90d1-0627254cb208'),
(2, 'Promoción Turística', 'Lorem Ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'https://firebasestorage.googleapis.com/v0/b/graficapopular-4d17f.appspot.com/o/arteurbano%2Ffotomural.webp?alt=media&token=19c8a76b-2ecc-424a-90d1-0627254cb208'),
(3, 'Arte y Decoración', 'Lorem Ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'https://firebasestorage.googleapis.com/v0/b/graficapopular-4d17f.appspot.com/o/arteurbano%2Ffotomural.webp?alt=media&token=19c8a76b-2ecc-424a-90d1-0627254cb208'),
(4, 'Negocios Populares', 'Lorem Ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'https://firebasestorage.googleapis.com/v0/b/graficapopular-4d17f.appspot.com/o/arteurbano%2Ffotomural.webp?alt=media&token=19c8a76b-2ecc-424a-90d1-0627254cb208'),
(5, 'Expresión de Identidad', 'Lorem Ipsum dolaor Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'https://firebasestorage.googleapis.com/v0/b/graficapopular-4d17f.appspot.com/o/arteurbano%2Ffotomural.webp?alt=media&token=19c8a76b-2ecc-424a-90d1-0627254cb208'),
(6, 'Literario y Comunicación', 'Lorem Ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'https://firebasestorage.googleapis.com/v0/b/graficapopular-4d17f.appspot.com/o/arteurbano%2Ffotomural.webp?alt=media&token=19c8a76b-2ecc-424a-90d1-0627254cb208'),
(7, 'Productos Artesanales', 'Lorem Ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'https://firebasestorage.googleapis.com/v0/b/graficapopular-4d17f.appspot.com/o/arteurbano%2Ffotomural.webp?alt=media&token=19c8a76b-2ecc-424a-90d1-0627254cb208'),
(8, 'Educación', 'Lorem Ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'https://firebasestorage.googleapis.com/v0/b/graficapopular-4d17f.appspot.com/o/arteurbano%2Ffotomural.webp?alt=media&token=19c8a76b-2ecc-424a-90d1-0627254cb208'),
(9, 'Mercado de Arte', 'Lorem Ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'https://firebasestorage.googleapis.com/v0/b/graficapopular-4d17f.appspot.com/o/arteurbano%2Ffotomural.webp?alt=media&token=19c8a76b-2ecc-424a-90d1-0627254cb208'),
(10, 'Arte Urbano', 'Lorem Ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'https://firebasestorage.googleapis.com/v0/b/graficapopular-4d17f.appspot.com/o/arteurbano%2Ffotomural.webp?alt=media&token=19c8a76b-2ecc-424a-90d1-0627254cb208'),
(11, 'Grafica Popular', 'Lorem Ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'https://firebasestorage.googleapis.com/v0/b/graficapopular-4d17f.appspot.com/o/arteurbano%2Ffotomural.webp?alt=media&token=19c8a76b-2ecc-424a-90d1-0627254cb208');