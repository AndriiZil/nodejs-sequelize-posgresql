const { DataTypes } = require('sequelize');
const ActorsModel = require('./actors.model');
const MoviesModel = require('./actors.model');

module.exports = (sequelize) => {
    return sequelize.define('actorsMovies', {
        movieId: {
            type: DataTypes.INTEGER,
            references: {
                model: MoviesModel,
                key: 'id'
            }
        },
        actorId: {
            type: DataTypes.INTEGER,
            references: {
                model: ActorsModel,
                key: 'id'
            }
        }
    });
};
