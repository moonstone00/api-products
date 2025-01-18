const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db.config')

class Product extends Model { }

Product.init({
    nip: {
        type: DataTypes.STRING,
        unique: true
    },
    nama: {
        type: DataTypes.STRING
    },
    jenisBarang: {
        type: DataTypes.STRING
    },
    harga: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Products'
})

module.exports = Product