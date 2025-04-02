const numberService = require("./numberService");

exports.getNumbers = async (req, res) => {
    const { numberid } = req.params;
    if (!["p", "f", "e", "r"].includes(numberid)) {
        return res.status(400).json({ error: "Invalid number ID" });
    }

    const response = await numberService.fetchAndStoreNumbers(numberid);
    res.json(response);
};
