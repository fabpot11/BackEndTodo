const mongoose = require('mongoose')

const lsSchema = mongoose.Schema({
    email:{type: String, require:true, unique: true},
    password : {type :String, require: true}
},{
    versionKey:false,
    timestamps: true
})

module.exports = mongoose.model('Userinfo',lsSchema)
