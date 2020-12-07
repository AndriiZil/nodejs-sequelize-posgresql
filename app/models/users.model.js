const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                // len: [1, 99],
                notNull: {
                    msg: 'Please enter your age'
                }
            }
        },
        fullInfo: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.name} ${this.age}`;
            }
        }
    });
};
