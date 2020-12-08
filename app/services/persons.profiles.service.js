const db = require('../models');
const Persons = db.persons;
const Profiles = db.profiles;

module.exports = {

    createPersonProfiles: async () => {
        try {
            // const person = await Persons.create({ username: 'Admin', points: 100 });
            // const profile = await Profiles.create({ name: 'Prof1' });
            //
            // await person.addProfile(profile);

            // The same way
            return Persons.create({
                username: 'Admin2',
                points: 1000,
                profiles: [{
                    name: 'Prof2'
                }]
            }, { include: Profiles });

        } catch (err) {
            console.log(err);
        }
    },

    getPersonProfiles: async () => {
        try {
            return Persons.findOne({
                where: { username: 'Admin2' },
                include: Profiles
            });
        } catch (err) {
            console.log(err);
        }
    }

};
