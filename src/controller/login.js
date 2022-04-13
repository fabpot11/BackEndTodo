const express = require("express");
const authCheck = require("../middle/authCheck");
const User = require("../model/loginSingup");

const rout = express.Router();

rout.post("/", authCheck, async (req, res) => {
  try {
    res.status(201).send('Done');
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
