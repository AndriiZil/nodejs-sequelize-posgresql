const { createCourse, findCourseById, findAllCourses } = require('../services/courses.service');
const { createUser, findUserById, findAllUsers } = require('../services/users.service');
const { createAddress, findAllAddresses } = require('../services/addresses.service');
const { createProduct } = require('../services/product.service');
const { createPersonProfiles, getPersonProfiles } = require('../services/persons.profiles.service')

exports.createUserWithAddress = async (req, res, next) => {
    try {
        const { name, age, city, street, phone } = req.body;

        const user = await createUser({ name, age });
        const address = await createAddress({ city, street, phone });

        await user.setAddress(address);

        return res.json({
            success: true,
            data: user
        })
    } catch (err) {
        next(err);
    }
}

exports.createAddressWithUser = async (req, res, next) => {
    try {
        const { name, age, city, street, phone } = req.body;

        const address = await createAddress({ city, street, phone });
        const user = await createUser({ name, age });

        await address.setUser(user);

        return res.json({
            success: true,
            data: user
        })
    } catch (err) {
        next(err);
    }
}

exports.getAllAddresses = async (req, res, next) => {
    try {
        const addresses = await findAllAddresses();

        return res.json({
            success: true,
            data: addresses
        })
    } catch (err) {
        next(err);
    }
}

exports.createUser = async (req, res, next) => {
    try {
        const { name, age, title, description } = req.body;

        const { user, count } = await createUser({ name, age, title, description });

        return res.json({
            success: true,
            data: user,
            count
        });
    } catch (err) {
        next(err);
    }
}

exports.findUserById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const tutorial = await findUserById(id);

        return res.send(tutorial);
    } catch (err) {
        next(err);
    }
}

exports.findAllUsers = async (req, res, next) => {
    try {
        const users = await findAllUsers();

        return res.json({
            success: true,
            data: users
        });
    } catch (err) {
        next(err);
    }
}

exports.createCourse = async (req, res, next) => {
    try {
        const { name, description, userId } = req.body;

        const comment = await createCourse(userId, { name, description });

        return res.send(comment);
    } catch (err) {
        next(err);
    }
}

exports.findCourseById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const comments = await findCourseById(id);

        return res.send(comments);
    } catch (err) {
        next(err);
    }
}

exports.findAllCourses = async (req, res, next) => {
    try {
        const comments = await findAllCourses();

        return res.send(comments);
    } catch (err) {POST
        next(err);
    }
}

exports.createActorWithMovie = async (req, res, next) => {
    try {


        return res.json({
            success: true,
            data: {}
        })
    } catch (err) {
        next(err);
    }
}

exports.geAllActorsWithMovies = async (req, res, next) => {
    try {
        // const actorsMovies = await A

        return res.json({
            success: true,
            data: {}
        })
    } catch (err) {
        next(err);
    }
}

exports.createProduct = async (req, res, next) => {
    try {
        const product = await createProduct(req.body);

        return res.json({
            success: true,
            data: product
        })
    } catch (err) {
        next(err);
    }
}

exports.createPersonsWithProfiles = async (req, res, next) => {
    try {
        const person = await createPersonProfiles();

        return res.json({
            success: true,
            data: person
        });
    } catch (err) {
        next(err);
    }
}

exports.gePersonWithProfiles = async (req, res, next) => {
    try {
        const result = await getPersonProfiles();

        return res.json({
            success: true,
            data: result
        });
    } catch (err) {
        next(err);
    }
}
