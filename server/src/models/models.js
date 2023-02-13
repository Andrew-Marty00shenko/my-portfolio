const sequelize = require('../core/db');
const { DataTypes } = require('sequelize');

const Project = sequelize.define('project', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    links: { type: DataTypes.STRING, allowNull: false },
});

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING }
});

// User.hasMany(Project);
// Project.belongsTo(User);

module.exports = {
    Project,
    User
};