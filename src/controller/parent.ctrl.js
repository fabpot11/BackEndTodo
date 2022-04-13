const express = require("express");
const Parent = require("../model/parent.schema");
const rout = express.Router();

rout.post("/", async (req, res) => {
  try {
    const ParentUplode = await Parent.create(req.body);
    res.status(201).send(ParentUplode);
  } catch (e) {
    res.status(400).send(e);
  }
});

rout.get("/", async (req, res) => {
  try {
    const data = await Parent.find().lean().exec();
    res.status(201).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

rout.get("/:id", async (req, res) => {
  try {
    const data = await Parent.find({ userId: req.params.id }).lean().exec();
    res.status(201).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

rout.delete("/:id", async (req, res) => {
  try {
    const deleteParent = await Parent.findByIdAndDelete(req.params.id);
    res.status(201).send({deleteParent});
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = rout;
