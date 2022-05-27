const { model } = require("../../model");

module.exports = async (req, res) => {
    const { data } = req.body;
    try {
        const post = await model.Blog.create(data);
        res.json({id: post.id});
    } catch (e) {
        console.log(e);
        res.status(500).json({ msg: e.name })
    }
}