CREATE SCHEMA `yoga_directory` ;

CREATE TABLE `yoga_directory`.`yoga_teachers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT(255) NOT NULL,
  `city` TEXT(255) NOT NULL,
  `instagram` TEXT(255) NOT NULL,
  `specialty` TEXT(255) NOT NULL,
  PRIMARY KEY (`id`));

  'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('yoga_teachers', 
    {       
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    city: { type: Sequelize.STRING },
    instagram: { type: Sequelize.STRING, allowNull: false },
    specialty: { type: Sequelize.STRING, allowNull: false },
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
    deletedAt: { type: Sequelize.DATE },
  });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('yoga_teachers');
  }
};


, {
        name: 'Erin',
        city: 'Atlanta',
        instagram: 'badyogiofficial',
        specialty: 'Fitness Yoga'
      }, {
        name: 'Dana',
        city: 'Austin',
        instagram: 'acrosprout',
        specialty: 'Acroyoga'
      }, {
        name: 'Megan',
        city: 'New York City',
        instagram: 'findyouryou',
        specialty: 'Vinyasa'
      }