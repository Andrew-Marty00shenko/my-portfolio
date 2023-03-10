const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ApiError = require('../error/ApiError');
const { User, Project } = require('../models/models');
const generateJWTToken = require('../utils/generateJWTToken');

class UserController {
    async registration(req, res, next) {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return next(ApiError.badRequest('All fields is required'));
        };

        const candidate = await User.findOne({
            where: {
                email
            }
        });

        if (candidate) {
            return next(ApiError.badRequest('Such user already exists'));
        };

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, password: hashPassword, name });
        const token = generateJWTToken(user.id, email, name);

        return res.json({ token });
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email
            }
        });

        if (!user) {
            return next(ApiError.internal('Invalid email or password'));
        };

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Invalid email or password'));
        };

        const token = generateJWTToken(user.id, email);

        return res.json({ token });
    }


    async auth(req, res, next) {
        const token = generateJWTToken(req.user.id, req.user.email, req.user.name);

        return res.json({ token });
    }
};

module.exports = new UserController();