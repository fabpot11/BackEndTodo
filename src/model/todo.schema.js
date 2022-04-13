const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    work: { type: String, requied: true },
    status: { type: String, requied: true },
    parentId: { type: mongoose.Schema.Types.ObjectId , ref:'Parent', requied:true},
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Todos", todoSchema);
