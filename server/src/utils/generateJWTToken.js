const jwt = require('jsonwebtoken');

module.exports = (id, email, name) => {
    return jwt.sign(
        {
            id,
            email,
            name
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '24h'
        }
    )
}