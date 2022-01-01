'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('yoga_teachers', [
      {
        name: 'Brytta',
        city: 'Lisbon',
        instagram: 'xanaduyoga',
        specialty: 'Vinyasa'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('yoga_teachers')
  }
}


