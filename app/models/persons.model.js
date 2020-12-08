const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('person', {
        username: DataTypes.TEXT,
        points: DataTypes.INTEGER
    }, { timestamps: false });
};
