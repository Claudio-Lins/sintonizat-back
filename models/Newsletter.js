// const Sequelize = require('sequelize')
// const db = require('./db')

// const Newsletter = db.define('newsletter', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   }
// })

/* ----------------------------- Option 2 ----------------------------- */

const { Sequelize, DataTypes, Model } = require('sequelize');
//const sequelize = new Sequelize('sqlite::memory:');
const db = require('./db')

//class Newsletter extends Model {}

const Newsletter = db.define('newsletter', {  
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  // Other model options go here
});

// Newsletter.sync({ alter: true })

module.exports = Newsletter
 