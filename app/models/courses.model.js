const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('course', {
        title: {
            type: DataTypes.TEXT
        },
        description: {
            type: DataTypes.TEXT
        }
    });
};
