const db = require('../models');
const Address = db.addresses;

module.exports = {

    createAddress: async (options) => {
        try {
            const { city, street, phone } = options;

            return Address.create({ city, street, phone });
        } catch (err) {
            console.log(err);
        }
    },

    findAddressById: async (courseId) => {
        try {
            return Address.findByPk(courseId, { include: ['users'] });
        } catch (err) {
            console.log(err);
        }
    },

    findAllAddresses: async () => {
        try {
            return await Address.findAll({ include: ['user'] });
        } catch (err) {
            console.log(err);
        }
    },

}
