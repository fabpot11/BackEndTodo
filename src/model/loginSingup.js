const mongoose = require('mongoose')

const lsSchema = mongoose.Schema({
    email:{type: String, require:true},
    password : {type :String, require: true}
},{
    versionKey:false
})

module.exports = mongoose.model('Userinfo',lsSchema)