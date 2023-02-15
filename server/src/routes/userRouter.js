const Router = require('express');
const router = new Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const UserController = require('../controllers/UserController');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', AuthMiddleware, UserController.auth);

module.exports = router;