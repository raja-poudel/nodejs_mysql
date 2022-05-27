const express = require("express");
const app = express.Router();

const create = require("../services/blog/create");
const getAll = require("../services/blog/getAll");
const getById = require("../services/blog/getById");
const update = require("../services/blog/update");
const deleteById = require("../services/blog/deleteById");


app.post("", create);

app.get("", getAll);

app.get("/:id", getById);

app.post("/:id", update);

app.delete("/:id", deleteById);

module.exports = app;