const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('actor', {
        name: {
            type: DataTypes.TEXT
        }
    });
};
