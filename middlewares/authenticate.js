const jwt = require('jsonwebtoken');
const { User, Profile } = require('../models');

module.exports = function (req, res, next) {
    // req is an object

    // Client will headers called authorization which contains JWT
    try {
        const bearerToken = req.headers.authorization // Basic Authentication -> Bearer Authentication
        // check if request header authorization sent or not
        if (!bearerToken) {
            return res.status(401).json({
                status: 'Failed',
                message: "No token in req header authorization"
            })
        }

        const token = bearerToken.split("Bearer ")[1];

        // check if request header authorization sent or not
        if (!token) {
            return res.status(401).json({
                status: 'Failed',
                message: "required token"
            })
        }

        const payload = jwt.verify(token, 'rahasia')
        User.findByPk(payload.id)
            .then(instance => {
                req.user = instance;
                next()
            })
    }

    catch (err) {
        res.status(401).json({
            status: 'Failed',
            message: err.message
        })
    }
}