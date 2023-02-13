const Router = require('express');
const ProjectController = require('../controllers/ProjectController');
const router = new Router();

router.get('/', ProjectController.getProjects);
router.post('/create', ProjectController.createProject);
router.post('/delete', ProjectController.removeProject);

module.exports = router;