-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: hacknjit
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `poops`
--

DROP TABLE IF EXISTS `poops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `poops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL,
  `datetime` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Log of poop';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poops`
--

LOCK TABLES `poops` WRITE;
/*!40000 ALTER TABLE `poops` DISABLE KEYS */;
INSERT INTO `poops` VALUES (1,'5','500000','log',NULL,NULL),(2,'3','500000','big log',NULL,NULL),(3,'2','1541299986','bigpoop','itookadump','streetcorner'),(4,'101346087324544217730','1540730042','1','a big ol poop','here'),(19,'101346087324544217730','1541172162','6','Just a big nasty dump','here'),(20,'101346087324544217730','1539531545','4','Dear diary, today I took a dump.','here'),(21,'101346087324544217730','1539841527','3','What a great day to be pooping','here'),(22,'101346087324544217730','1540841656','4','Yet another dookie','here'),(23,'101346087324544217730','1540942059','3','Quite the dump I took','here'),(24,'101346087324544217730','1541348744','5','Today, I pooped','here'),(25,'101346087324544217730','1541348945','1','test','here'),(26,'101346087324544217730','1541348947','1','test','here'),(27,'101346087324544217730','1541349215','1','test','here'),(28,'101346087324544217730','1541349222','1','test','here'),(29,'101346087324544217730','1541351311','4','One fat turd','here'),(30,'101346087324544217730','1541352917','1','Pretty difficult','here');
/*!40000 ALTER TABLE `poops` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-04 12:55:45
