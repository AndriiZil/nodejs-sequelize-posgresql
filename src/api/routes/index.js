'use strict';

module.exports = app => {
    app.use('/', require('./users'));
}