const ApiError = require('../error/ApiError');

class UserController {
    async registration() {

    }

    async login() {

    }


    async auth(req, res, next) {
        const { id } = req.query;

        if (!id) {
            return next(ApiError.badRequest('ID is required'));
        }
    }
};

module.exports = new UserController();