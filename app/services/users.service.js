const db = require('../models');
const User = db.users;
const Course = db.courses;

module.exports = {

    createUser: async ({ name, age, title, description }) => {
        try {
            const user = await User.create({ name, age });
            const course = await Course.create({ title, description });

            await user.setCourses(course);
            const count = await user.countCourses()

            return {
                user,
                count
            };
        } catch (err) {
            console.log(err);
        }
    },

    findUserById: async (id) => {
        try {
            return User.findByPk(id, { include: [ 'courses' ]});
        } catch (err) {
            console.log(err);
        }
    },

    findAllUsers: async () => {
        try {
            return User.findAll({
                include: [{
                    model: Course,
                    as: 'courses',
                    required: true, // INNER JOIN // Without left JOIN
                    // right: true // RIGHT JOIN
                }]
            })
        } catch (err) {
            console.log(err);
        }
    }
}
