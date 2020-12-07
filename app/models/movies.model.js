const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('movie', {
        name: {
            type: DataTypes.TEXT
        }
    });
};
