const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('tag', {
        name: {
            type: DataTypes.TEXT
        }
    });
};
