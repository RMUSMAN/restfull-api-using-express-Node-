const mongoose = require('mongoose');
const Profileschema = mongoose.Schema({
first_name:{
    type:String,
    required:true,
    maxlength:255
},
last_name:{
    type:String,
    required:true,
    maxlength:255
},
email:{
    type:String,
    required:true,
    maxlength:255
},
address:{
    type:String,
    required:true,
    maxlength:255
},


});

module.exports = mongoose.model('profiles', Profileschema);