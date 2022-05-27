const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const BlogCategory = sequelize.define('category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    enabled: {
        type: DataTypes.STRING,
    }
}, {
    tableName: "blog_category",
    createdAt: false,
    updatedAt: false
});

BlogCategory.sync();

module.exports = { BlogCategory }