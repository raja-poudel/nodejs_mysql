const { model } = require("../../model");

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await model.BlogCategory.findByPk(id);
        if (category !== null) {
            await model.BlogCategory.destroy({ where: { id: id } });
            return res.json({ msg: "Successfully deleted." });
        }
        res.json({ msg: "Not Found." })
    } catch (e) {
        res.status(500).json({ msg: e.name });
    }
}