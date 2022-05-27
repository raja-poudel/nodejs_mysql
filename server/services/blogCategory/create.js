const { model } = require("../../model");

module.exports = async (req, res) => {
    const { name, enabled } = req.body;
    try {
        if (name === undefined) {
            return res.status(400).json({ msg: "Please enter name" });
        }
        if (enabled === undefined) {
            return res.status(400).json({ msg: "please enter enabled" });
        }

        const category = await model.BlogCategory.findOne({ where: { name: name } });
        if (category !== null) {
            console.log("null is the true value.")
            return res.status(400).json({ msg: "Name is already taken" });
        }

        const instance = await model.BlogCategory.build({name, enabled});
        instance.save();
        res.json({ msg: "Successfully created." });
    } catch (e) {
        res.status(500).json(e);
    }
}