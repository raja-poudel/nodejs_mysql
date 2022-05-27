const express = require("express");
const app = express.Router();

const create = require("../services/blogCategory/create");
const getAll = require("../services/blogCategory/getAll");
const getById = require("../services/blogCategory/getById");
const update = require("../services/blogCategory/update");
const deleteById = require("../services/blogCategory/deleteById");

app.post("", create);

app.get("", getAll);

app.get("/:id", getById);

app.post("/:id", update);

app.delete("/:id", deleteById);

module.exports = app;