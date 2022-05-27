const { model } = require("../../model");

module.exports = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    try {
        if (data !== undefined) {
            const category = await model.BlogCategory.findByPk(id);
            if (category !== null) {
                await model.BlogCategory.update(data, {
                    where: { id }
                });
                return res.json({ msg: "Successfully updated." })
            }
            return res.status(404).json({ msg: "Not Found" });
        }
        res.status(400).json({ msg: "enter the attribute you want to update inside data attribute in json" })

    } catch (e) {
        res.status(500).json(e)
    }
}