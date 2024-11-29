# kaveto-backend
## Project preparation
1. Initialize project folder. *--y* for skip question about config and use default.
```
npm init --y
```
 2. Create simple JS file (app.js) to test that can be run on Node.
```
console.log("Hello Kaveto");
```
3. Install mongodb module for access to mongodb cloud.
```
npm install mongodb
```
4. Copy this code to test connection to mongodb.
```
// Call Mongo driver from mongodb
const { MongoClient, ServerApiVersion } = require('mongodb');

// create variable uri contain string for connect to mongo db. this string format will provide by mongo
const uri = "mongodb+srv://<username>:<password>@<url>/<db>?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Create asynchronous function run() without parameter
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// Run function run()
run().catch(console.dir);
```
5. Install mongoose module for accessing cloud mongodb Atlas. mongoose is mongodb object modelling for node.js
```
npm install mongoose
```
6. Replace current code this code to test connection to mongodb using mongoose.
```
// Call mongoose driver from mongoose
const mongoose = require('mongoose');

// create variable uri contain string for connect to mongo db. this string format will provide by mongo
const uri = "mongodb+srv://<username>:<password>@<url>/<db>?retryWrites=true&w=majority";

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
```
7. Install dotenv to split configuration with source code
```
npm install dotenv
```
8. Add file .env contain
```
CLOUD_MONGODB_CONNECTIION=<connection string mongodb cloud>
```
9. Modify app.js to include .env
```
...
require('dotenv').config();
...
const uri = process.env.CLOUD_MONGODB_CONNECTIION;
```
