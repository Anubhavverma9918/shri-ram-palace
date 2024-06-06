const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

app.use("/", require("./routes/userRoute"));
app.use("/", require("./routes/reviewRoute"))

const port = process.env.PORT
app.listen(port, function() {
    console.log("server running on port 3003");
});