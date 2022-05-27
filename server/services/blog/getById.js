const { model } = require("../../model");
const { BlogCategory } = require("../../model/blog-category.model");

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await model.Blog.findByPk(id, {
            include: [
                {model: BlogCategory, attributes: ['name']}
            ]
        });
        if(post !== null) {
            return res.json(post);
        }
        res.status(404).json({msg: "Not Found."})
    } catch (e) {
        console.log(e);
        res.status(500).json({ msg: e.name })
    }
}