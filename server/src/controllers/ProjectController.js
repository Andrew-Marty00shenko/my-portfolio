const { Project } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class ProjectController {
    async createProject(req, res, next) {
        try {
            const { name, description, links } = req.body;
            const { image } = req.files;

            let fileName = uuid.v4() + '.png';
            image.mv(path.resolve(__dirname, '..', 'static', fileName));

            const project = await Project.create({ name, description, links, image: fileName });

            return res.json(project);
        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getProjects(req, res) {
        let { skip, limit } = req.query;

        skip = skip || 0;
        limit = limit || 10;
        let offset = (skip * limit - limit) >= 0 ? (skip * limit - limit) : 0;

        console.log(offset)

        const projects = await Project.findAndCountAll({ limit, offset });

        return res.json(projects);
    }

    async removeProject(req, res) {
        const { id } = req.body;
        await Project.destroy(({
            where: {
                id: id
            }
        }));

        return res.json({ message: 'successfully removed' });
    }
};

module.exports = new ProjectController();