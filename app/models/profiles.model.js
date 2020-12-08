const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('profile', {
        name: DataTypes.TEXT
    }, {
        timestamps: false,
        version: true // Optimistic lock
    });
};
