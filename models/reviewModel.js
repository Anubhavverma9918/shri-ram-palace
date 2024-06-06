const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review:{
        type:String,
        required:[true, "Please write a review!"]
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;