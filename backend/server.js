import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import products from "./data/products.js";
const port = process.env.PORT;

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = products.find((item) => item._id === req.params.id);
  res.json(productId);
});

app.listen(port, () => console.log(`port is running on ${port}`));
