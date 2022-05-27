const { model } = require("../../model");

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await model.BlogCategory.findByPk(id);
        if (category !== null) {
            return res.json(category);
        }
        res.json({msg: "Not found"})

    } catch (e) {
        res.status(500).json(e);
    }
}