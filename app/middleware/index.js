module.exports = {
    notFoundError: (req, res, next) => {
        res.status(404).send({ message: `Route "http://localhost:${process.env.PORT}${req.originalUrl}" was not found. `});
        next();
    },
    errorHandler: (err, req, res, next) => {
        if (err) {
            const code = err.code || err.status || 500;
            const message = err.message || 'Unknown Error';

            return res.status(code).send({ message });
        }
        next();
    }
};
