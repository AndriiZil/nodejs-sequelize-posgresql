const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('address', {
        city: {
            type: DataTypes.TEXT
        },
        street: {
            type: DataTypes.TEXT
        },
        phone: {
            type: DataTypes.TEXT
        },
    });
};
