const Teachers = (connection, Sequelize) => {
    return connection.define('teachers', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      online_availability: { type: Sequelize.BOOLEAN, allowNull: false },
      city: { type: Sequelize.STRING },
      instagram: { type: Sequelize.STRING, allowNull: false },
      specialty: { type: Sequelize.STRING, allowNull: false },
    }, { paranoid: true })
  }
  
  module.exports = Teachers