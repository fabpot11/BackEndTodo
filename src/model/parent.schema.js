const mongoose = require("mongoose");

const parentSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    img: { type: String, require: true },
    userId: { type: mongoose.Schema.Types.ObjectId , ref:'Userinfo', requied:true}
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Parent',parentSchema)
