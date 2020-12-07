const db = require('../models');
const ActorsMoviesService = db.actorsMovies;

module.exports = {

    createActorMovie: async (opts) => {
        try {

        } catch (err) {
            console.log(err);
        }
    },

    getAllActorsAndMovies: async () => {
        try {
            return ActorsMoviesService.findAll({
                include: { all: true }
            });
        } catch (err) {
            console.log(err);
        }
    }

};
