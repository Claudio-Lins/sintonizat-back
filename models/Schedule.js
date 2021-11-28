const Sequelize = require('sequelize')
const db = require('./db')

const Schedule = db.define('schedules', {
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

// const { Sequelize, DataTypes, Model } = require('sequelize');
// //const sequelize = new Sequelize('sqlite::memory:');
// const db = require('./db')

// //class Newsletter extends Model {}

// const Schedule = db.define('schedule', {  
//     id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   textOne: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   textTitle: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   textTwo: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   }
// }, {
//   // Other model options go here
// });


 