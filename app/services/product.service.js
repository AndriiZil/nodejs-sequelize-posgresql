const db = require('../models');
const Products = db.products;
const Tags = db.tags;

module.exports = {
    createProduct: async (opts) => {
        try {
            /*
                {
                    "title": "Banana",
                    "tags": [
                        { "name": "One" },
                        { "name": "Two" },
                        { "name": "Three" }
                    ]
                }
             */
            return Products.create(opts, { include: [ Tags ] });
        } catch (err) {
            console.log(err);
        }
    }
};
