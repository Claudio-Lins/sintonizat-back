const Sequelize = require('sequelize')
const db = require('./db')

const Schedule = db.define('schedule', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  textOne: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  textTitle: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  textTwo: {
    type: Sequelize.STRING,
    allowNull: true,
  }
})

// Schedule.sync({ alter: true })

module.exports = Schedule