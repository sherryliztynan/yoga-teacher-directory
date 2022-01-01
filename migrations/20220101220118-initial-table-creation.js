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
