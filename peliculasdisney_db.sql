-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: peliculasdisney_db
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'Aventura','https://35mm.es/wp-content/uploads/2021/06/peliculas-de-aventuras.jpg.webp'),(2,'Animación','https://andro4all.com/hero/2019/06/Destacada-Toy-Story.jpg?width=480&aspect_ratio=19:10&format=nowebp'),(3,'Ciencia ficción','https://libroveolibroleo.com/wp-content/uploads/2020/03/ciencia-ficción-libro-veo-libro-leo.png'),(4,'Comedia','https://static.guiainfantil.com/pictures/638-goofy-e-hijo.jpg'),(5,'Drama','https://static.wikia.nocookie.net/disneyypixar/images/e/eb/Mulan_2020_poster.jpg/revision/latest/smart/width/160/height/120?cb=20191218173656&path-prefix=es\n');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculas`
--

DROP TABLE IF EXISTS `peliculas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagen` varchar(200) DEFAULT NULL,
  `titulo` varchar(65) DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `calificacion` int DEFAULT NULL,
  `genero_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_genero` (`genero_id`),
  CONSTRAINT `FK_id_genero` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculas`
--

LOCK TABLES `peliculas` WRITE;
/*!40000 ALTER TABLE `peliculas` DISABLE KEYS */;
INSERT INTO `peliculas` VALUES (1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzAvb8vFlI_NhQWAKMNDqDLXLBwG7uAtrXpbTiZGq5foib83-','Toy Story','1995-03-14',8,2),(2,'https://static.wikia.nocookie.net/doblaje/images/9/92/Toy_Story_2_-_Poster.jpg/revision/latest/scale-to-width-down/333?cb=20200724211605&amp;path-prefix=es\n','Toy Story 2','1999-12-02',8,2),(3,'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSOJAX2A7HOH24xQYyUjz6rYZ1U23EfXiUZLZfFmHMznpFNxyIY','Piratas del Caribe: \"la maldición del perla negra\"','2003-07-17',8,1),(4,'https://es.web.img3.acsta.net/c_310_420/pictures/14/03/25/11/14/498694.jpg','Piratas del caribe: \"el cofre de la muerte\"','2006-07-19',7,1),(5,'https://static.wikia.nocookie.net/doblaje/images/e/e0/Lion_king_1.jpg/revision/latest/scale-to-width-down/333?cb=20200726001925&path-prefix=es\n','El Rey León','1994-07-07',8,2);
/*!40000 ALTER TABLE `peliculas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculas_personajes`
--

DROP TABLE IF EXISTS `peliculas_personajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculas_personajes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pelicula_id` int DEFAULT NULL,
  `personaje_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_pelicula` (`pelicula_id`),
  KEY `FK_id_personaje` (`personaje_id`),
  CONSTRAINT `FK_id_pelicula` FOREIGN KEY (`pelicula_id`) REFERENCES `peliculas` (`id`),
  CONSTRAINT `FK_id_personaje` FOREIGN KEY (`personaje_id`) REFERENCES `personajes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculas_personajes`
--

LOCK TABLES `peliculas_personajes` WRITE;
/*!40000 ALTER TABLE `peliculas_personajes` DISABLE KEYS */;
INSERT INTO `peliculas_personajes` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,1),(5,2,2),(6,2,3),(7,3,4),(8,3,5),(9,3,6),(10,4,4),(11,4,5),(12,4,6),(13,5,7),(14,5,8),(15,5,9);
/*!40000 ALTER TABLE `peliculas_personajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personajes`
--

DROP TABLE IF EXISTS `personajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personajes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagen` varchar(300) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  `peso` int DEFAULT NULL,
  `historia` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personajes`
--

LOCK TABLES `personajes` WRITE;
/*!40000 ALTER TABLE `personajes` DISABLE KEYS */;
INSERT INTO `personajes` VALUES (1,'https://static.wikia.nocookie.net/dominios-encantados/images/a/a7/WIKI_WOODY.jpg/revision/latest?cb=20150524144817&path-prefix=es','Woody',7,1,'Es un vaquero, juguete favorito de Andy, es leal, apasionado y determinado.'),(2,'https://static.wikia.nocookie.net/disneyypixar/images/7/7c/Buzz_Lightyear_KH3.png/revision/latest?cb=20181022022331&path-prefix=es','Buzz Lightyear',7,1,'Es un juguete con forma de guerrero espacial, quien vela por la seguridad del universo.'),(3,'https://static.wikia.nocookie.net/toystory/images/f/f0/B2e5d0aa54d7331733b3cc04241542c8.jpg/revision/latest/top-crop/width/360/height/450?cb=20201004040754&path-prefix=es','Jessie',5,1,'Es una vaquera, juguete que fue abandonada por su antigua dueña Emily, es energica, valiente y muy atletica.'),(4,'https://static.wikia.nocookie.net/doblaje/images/4/4c/CaptainJackSparrow_PiratesCaribbean02.jpg/revision/latest/scale-to-width-down/350?cb=20190322185334&path-prefix=es','Jack Sparrow',28,75,'Es uno de los piratas más temidos del Caribe. Se trata de un personaje traicionero, que sobrevive en la mayoría de ocasiones usando su ingenio y negociando en lugar de usar las armas y la fuerza'),(5,'https://static.wikia.nocookie.net/disney/images/8/85/Elizabeth_Swann_Headshot.jpg/revision/latest/scale-to-width-down/350?cb=20171009215247&path-prefix=es','Elizabeth Swann',27,58,'Es la joven hija del gobernador Weatherby Swann de Port Royal. Ya desde pequeña le encantaban las historias de piratas y ahora sus ansias de libertad le traerán más de un problema a su padre.'),(6,'https://static.wikia.nocookie.net/disney/images/4/45/WillTurner.png/revision/latest/scale-to-width-down/322?cb=20130830153623&path-prefix=es','William Turner',27,72,'Es un joven herrero de ascendencia pirata enamorado de Elizabeth Swann.'),(7,'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/07/18/1006528.jpg','Mufasa',30,40,'Es el padre de Simba, el esposo de Sarabi, el hermano mayor de Scar y el Rey de las Tierras del Reino al comienzo de la película.'),(8,'https://i.pinimg.com/564x/53/a9/e8/53a9e8246db02557d89e1c1116d6983b.jpg','Simba',10,8,'Es el hijo de mufasa, Como un cachorro, Simba es curioso, aventurero, arrogante y muy dispuesto a convertirse en rey.'),(9,'https://static.wikia.nocookie.net/disney/images/c/c7/Scar.png/revision/latest/scale-to-width-down/290?cb=20121008181300&path-prefix=es','Scar',25,30,'Es el segundo hijo de Uru y Ahadi y el hermano menor de Mufasa. Cuando eran pequeños tenían una relación normal, como hermanos, hasta que Ahadi dijo que Mufasa había sido el elegido para ser rey y Taka para ser el líder de la guardia del león');
/*!40000 ALTER TABLE `personajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `contraseña` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-08 18:26:31
