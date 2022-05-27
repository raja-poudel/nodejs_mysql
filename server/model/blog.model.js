const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");
const { BlogCategory } = require("./blog-category.model");

const Blog = sequelize.define('Blog', {
    title: {
        type: DataTypes.STRING(100),
    },
    description: {
        type: DataTypes.STRING(100),
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: BlogCategory,
            key: 'id'
        }
    },
    cover: {
        type: DataTypes.BLOB
    },
    content: {
        type: DataTypes.BLOB
    },
    createdBy: {
        type: DataTypes.STRING(100)
    },
    updatedBy: {
        type: DataTypes.STRING(100)
    },
    createdOn: {
        type: DataTypes.DATEONLY
    },
    updatedOn: {
        type: DataTypes.DATEONLY
    }
}, {
    tableName: "blog",
    createdAt: false,
    updatedAt: false
});

Blog.sync();

module.exports = { Blog }