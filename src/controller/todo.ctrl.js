const express = require("express");
const Todo = require("../model/todo.schema");
const rout = express.Router();

rout.post("/", async (req, res) => {
  try {
    const todoUplode = await Todo.create(req.body);
    res.status(201).send(todoUplode);
  } catch (e) {
    res.status(400).send(e);
  }
});

rout.get("/:id", async (req, res) => {
  try {
    const data = await Todo.find({ parentId: req.params.id }).lean().exec();
    res.status(201).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

rout.delete("/:id", async (req, res) => {
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
    res.status(201).send({ deleteTodo });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = rout;
