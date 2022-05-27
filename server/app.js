const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path")
const blogCategory = require("./routes/blog-category");
const blog = require("./routes/blog");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.text({ limit: '200mb' }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
})

app.use("/blogCategory", blogCategory);
app.use("/blog", blog);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})