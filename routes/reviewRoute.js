const express = require("express");
const router = express.Router();
const Review = require("../models/reviewModel");

router.route("/reviews").post((req, res) => {
    const review = req.body.review;

    const newReview = new Review({
        review
    });

    newReview.save();
});

module.exports = router;