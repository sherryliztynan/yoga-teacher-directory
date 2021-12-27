const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const TeachersModel = require('./teachers')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Teachers = TeachersModel(connection, Sequelize)

module.exports = {
  Teachers,
  Sequelize
}