const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        credentials: true,
    }
))

module.exports = { app };