const { Blog } = require("./blog.model"),
    { BlogCategory } = require("./blog-category.model");

BlogCategory.hasMany(Blog, {
    foreignKey: {
        name: "category_id"
    },
});

Blog.belongsTo(BlogCategory, {
    foreignKey: {
        name: "category_id"
    },
})

const model = {
    Blog,
    BlogCategory
}

module.exports = { model }