const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
    try {

        return res.json({
            success: true,
            data: {}
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;