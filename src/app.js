// Call mongoose driver from mongoose. Use dotenv for store config
const mongoose = require('mongoose');
require('dotenv').config();

// create variable uri contain string for connect to mongo db. this string format will provide by mongo
// This string is manage by .env
const uri = process.env.CLOUD_MONGODB_CONNECTIION;

// Connect to db using Mongoose
mongoose.connect(uri)
    .then(function() {
        console.log('Connected to cloud MongoDB');
        // Perform database operation here
        // Close the connection when done
        mongoose.connection.close();
    })
    .catch(function(err) {
        console.error(err);
    });
