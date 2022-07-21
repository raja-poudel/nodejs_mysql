const express = require("express");

const { todoService } = require("./dependency.injection");
const TodoController = require("./controller");

const router = express.Router();
const todoController = new TodoController(todoService);

router.post("", (req, res) => todoController.create(req, res));
router.get("", (req, res) => todoController.findAll(req, res));
router.get("/:id", (req, res) => todoController.findById(req, res));
router.update("/:id", (req, res) => todoController.update(req, res));
router.delete("/:id", (req, res) => todoController.delete(req, res));
