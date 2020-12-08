module.exports = app => {

    const Controller = require('../controllers/controllers');
    const router = require('express').Router();

    router.post('/users-addresses', Controller.createUserWithAddress);
    router.get('/users-addresses', Controller.getAllAddresses);

    router.post('/addresses', Controller.createAddressWithUser);

    router.post('/users', Controller.createUser);
    router.get('/users', Controller.findAllUsers);
    router.get('/users/:id', Controller.findUserById);

    router.post('/products', Controller.createProduct);
    router.post('/products', Controller.createProduct);

    router.post('/actors', Controller.createActorWithMovie);

    router.post('/persons-profiles', Controller.createPersonsWithProfiles);
    router.get('/persons-profiles', Controller.gePersonWithProfiles);

    router.post('/courses', Controller.createCourse);
    router.get('/courses', Controller.findAllCourses);
    router.get('/courses/:id', Controller.findCourseById);

    app.use('/api', router);

};
