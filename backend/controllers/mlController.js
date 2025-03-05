const axios = require("axios");

const classifyComplaint = async (req, res) => {
    try {
        const { text } = req.body; // Get complaint text from frontend

        if (!text) {
            return res.status(400).json({ error: "No text provided" });
        }

        const response = await axios.post("http://127.0.0.1:5001/predict", {
            complaint_text: text  // Change "text" to "complaint_text"
        });
        res.json(response.data); // Send Flask response back to frontend
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { classifyComplaint };
