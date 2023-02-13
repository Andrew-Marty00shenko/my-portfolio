const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const sequelize = require('./core/db');
const models = require('./models/models');
const fileUploader = require('express-fileupload');
const router = require('./routes/routes');
const errorHandler = require('./middlewares/ErrorHandlingMiddleware');

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUploader({}))
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    } catch (err) {
        console.log(err)
    }
}

start();



