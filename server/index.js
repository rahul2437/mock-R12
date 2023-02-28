const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const productRoute = require("./routes/product.route");
require("dotenv").config();

const app = express();
// REQUIRED FOR USING IN OTHER NETWORKS
app.use(
  cors({
    origin: "*",
  })
);
// FOR CONVERTING PAYLOAD TO JSON
app.use(express.json());

// User Route
app.use("/products", productRoute);
// Base URL
app.get("/", (req, res) => {
  res.json({ message: "WELCOME TO OLX Classified App API" });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(
      `Server listening on port http://localhost:${process.env.PORT}`
    );
  } catch (error) {
    console.log(error.message);
  }
});
