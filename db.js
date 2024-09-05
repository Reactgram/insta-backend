const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


mongoose.connect(process.env.MONGO)
.then(
    () => {
        console.log("Connected to the database");
    }
)
.catch(err => {
    console.log("Error connecting to the database", err);
})
