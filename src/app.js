const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createLinuxApp } = require("../assets/createLinuxApp");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

module.exports = () => {
    app.post("/create-app", async (req, res) => {
        const { url, name } = req.body;
        try {
            await createLinuxApp(url, name);
            res.status(200).send({ message: "App created successfully!" });
        } catch (error) {
            console.error("Error creating app:", error);
            res.status(500).send({ error: "Failed to create app" });
        }
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};
