// index.js (inside API folder)

const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const CONNECTION_STRING = "mongodb://localhost:27017/";
const DATABASENAME = "MyDb";

let database = null;

console.log("Starting API...");
console.log("Connecting to MongoDB...");

async function start() {
  try {
    const client = new MongoClient(CONNECTION_STRING, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });

    await client.connect();

    database = client.db(DATABASENAME);
    console.log("Connected to MongoDB");

    app.listen(5038, () => {
      console.log("Server running on http://localhost:5038");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

start();


// ================= ROUTES =================


// GET ALL BOOKS
app.get("/api/books/GetBooks", async (req, res) => {
  try {
    if (!database) return res.status(500).json("Database not connected");

    const result = await database.collection("Books").find({}).toArray();
    res.json(result);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json("Failed to fetch books");
  }
});


// ADD BOOK
app.post("/api/books/AddBook", async (req, res) => {
  try {
    const newBook = {
      id: Date.now().toString(),
      title: req.body.title,
      desc: req.body.desc,           
      price: Number(req.body.price),
      author: req.body.author,
      category: req.body.category
    };

    await database.collection("Books").insertOne(newBook);

    res.json("Added Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json("Failed to add book");
  }
});


// UPDATE BOOK
app.put("/api/books/UpdateBook", async (req, res) => {
  try {
    if (!database) return res.status(500).json("Database not connected");

    const id = req.query.id;         

    await database.collection("Books").updateOne(
      { id: id },
      {
        $set: {
          title: req.body.title,
          desc: req.body.desc,       
          price: Number(req.body.price),
          author: req.body.author,
          category: req.body.category
        },
      }
    );

    res.json("Updated Successfully");
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json("Failed to update book");
  }
});


// DELETE BOOK
app.delete("/api/books/DeleteBook", async (req, res) => {
  try {
    if (!database) return res.status(500).json("Database not connected");

    await database.collection("Books").deleteOne({
      id: req.query.id
    });

    res.json("Deleted Successfully");
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json("Failed to delete book");
  }
});
