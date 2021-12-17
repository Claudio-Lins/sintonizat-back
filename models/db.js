const { Sequelize } = require('sequelize')
require('dotenv').config()

// Local
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
      timestamps: true,
    },
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection with DB has been established successfully.')
  })
  .catch(() => {
    console.log('Unable to connect to the database')
  })

module.exports = sequelize
