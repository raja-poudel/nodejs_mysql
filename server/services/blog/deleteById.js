const { model } = require("../../model");

module.exports = async (req, res) => {
    try {
        const posts = await model.Blog.findAll();
        res.json(posts);
    } catch (e) {
        res.status(500).json({ msg: e.name })
    }
}