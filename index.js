const express = require("express");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// Database Configuration

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gi8q3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        // console.log('database connected successfully');
        const database = client.db("taskResaturant");
        const foodItemsCollection =
            database.collection("foodItems");

        // GET API
        app.get("/FoodItemsLists", async (req, res) => {
            const cursor = foodItemsCollection.find({});
            const foodItemsList = await cursor.toArray();
            res.send(foodItemsList);
        });


    } finally {
    }
}

run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("server from node server");
});

app.get("/testing", (req, res) => {
    res.send("testing pass");
});

app.listen(port, () => {
    console.log("listing form port ", port);
});