const { model } = require("../../model");

module.exports = async (req, res) => {
    try {
        const categories = await model.BlogCategory.findAll();
        res.json(categories);
    } catch (e) {
        res.status(500).json(e);
    }
}