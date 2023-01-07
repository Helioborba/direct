-- Adminer 4.8.1 MySQL 8.0.31 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `profile`;
CREATE TABLE `profile` (
  `entry_id` int NOT NULL AUTO_INCREMENT,
  `id` varchar(35) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `profile_picture` longblob,
  `biography` varchar(200) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `banner` longblob,
  PRIMARY KEY (`entry_id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `display_name` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `email` varchar(30) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `password` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `profile_id` varchar(35) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;


-- 2023-01-04 20:40:32