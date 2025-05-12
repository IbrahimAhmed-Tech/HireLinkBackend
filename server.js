const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const { connectMongoDB } = require("./connection");

// Load environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", authRoutes);
app.use("/api/jobs", jobRoutes);

// Pass server instance to MongoDB connection logic
connectMongoDB(server, 5000);

module.exports = app;
