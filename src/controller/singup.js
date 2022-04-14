const express = require("express");
const User = require("../model/loginSingup");

const rout = express.Router();

rout.post("/", async (req, res) => {
  try {
    const data = await User.create(req.body);
    res.status(201).send({"_id":data._id});
  } catch (e) {
    res.status(501).send(e.message);
  }
});

rout.get("/", async (req, res) => {
  try {
    const data = await User.find().lean().exec();
    res.status(201).send(data);
  } catch (e) {
    res.status(501).send(e.message);
  }
});

rout.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(201).send({ deletedUser });
  } catch (e) {
    res.status(501).send(e.message);
  }
});

module.exports = rout;
