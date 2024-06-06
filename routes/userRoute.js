const express = require("express");
const router = express.Router();
const User = require("../models/userModel");


router.route("/users").post((req, res) => {
    const username = req.body.username;
    const useremail = req.body.useremail;
    const usermessage = req.body.usermessage;

    const newUser = new User({
        username,
        useremail,
        usermessage
    });

    newUser.save();
});

module.exports = router;