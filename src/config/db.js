const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'myuser', 'mypass', {
    host: 'localhost',
    dialect: 'postgres'
});

async function run() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

run().catch(console.log);

module.exports = sequelize;
