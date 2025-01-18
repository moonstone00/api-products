const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('data_api_products', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3308
})

module.exports = sequelize