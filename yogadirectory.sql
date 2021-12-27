CREATE SCHEMA `yoga_directory` ;

CREATE TABLE `yoga_directory`.`yoga_teachers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT(255) NOT NULL,
  `online_availability` TINYINT(1) NOT NULL,
  `city` TEXT(255) NOT NULL,
  `instagram` TEXT(255) NOT NULL,
  `specialty` TEXT(255) NOT NULL,
  PRIMARY KEY (`id`));