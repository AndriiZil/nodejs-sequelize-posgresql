const express = require('express');

const Router = require('./api/routes/index');

const app = express();

Router(app);

app.listen(8080, () => {
    console.log('Server was started');
});
