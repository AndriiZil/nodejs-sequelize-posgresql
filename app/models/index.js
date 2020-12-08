const {
    DB, dialect, HOST, PASSWORD, pool, USER
} = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
    operatorsAliases: false,
    pool,
    logging: console.log,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users.model')(sequelize);
db.courses = require('./courses.model')(sequelize);
db.addresses = require('./adresses.model')(sequelize);
db.movies = require('./movies.model')(sequelize);
db.actors = require('./actors.model')(sequelize);
db.actorsMovies = require('./actors.movies.model')(sequelize);
db.products = require('./products.model')(sequelize);
db.tags = require('./tags.model')(sequelize);
db.profiles = require('./profiles.model')(sequelize);
db.persons = require('./persons.model')(sequelize);

// Many to many relationship
db.persons.belongsToMany(db.profiles, { through: 'user_profiles' });
db.profiles.belongsToMany(db.persons, { through: 'user_profiles' });

db.users.hasOne(db.addresses); // Address has userId
db.addresses.belongsTo(db.users, {
    foreignKey: 'userId',
    as: 'user'
});

db.products.hasMany(db.tags);
db.tags.belongsTo(db.products, {
    foreignKey: 'productId',
    as: 'products'
});

db.users.hasMany(db.courses);
db.courses.belongsTo(db.users, {
    foreignKey: 'userId',
    as: 'users'
});

db.movies.belongsToMany(db.actors, { through: db.actorsMovies });
db.actors.belongsToMany(db.movies, { through: db.actorsMovies });

module.exports = db;
