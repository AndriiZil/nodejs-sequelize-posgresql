const db = require('../models');
const Course = db.courses;

module.exports = {

    createCourse: async (options) => {
        try {
            const { city, street, phone } = options;

            return Course.create({  city, street, phone });
        } catch (err) {
            console.log(err);
        }
    },

    findCourseById: async (streetId) => {
        try {
            return Course.findByPk(streetId, { include: ['users'] });
        } catch (err) {
            console.log(err);
        }
    },

    findAllCourses: async () => {
        try {
            return await Course.findAll({ include: ['users'] });
        } catch (err) {
            console.log(err);
        }
    },

}
