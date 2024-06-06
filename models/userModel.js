const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:[true, "Please provide your name!"]
    },
    useremail:{
        type:String,
        required:[true, "Please provide your email!"]
    },    
    usermessage:{
        type:String,
        required:[true, "Please write message with proper information!"]
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;