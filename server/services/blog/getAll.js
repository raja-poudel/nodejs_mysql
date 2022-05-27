const { model } = require("../../model");
const { BlogCategory } = require("../../model/blog-category.model");

module.exports = async (req, res) => {
    try {
        const posts = await model.Blog.findAll({
            include: {
                model: BlogCategory,
                attributes: ['name']
            }
        });
        console.log(posts);
        res.json(posts);
    } catch (e) {
        console.log(e);
        res.status(500).json({ msg: e.name })
    }
}