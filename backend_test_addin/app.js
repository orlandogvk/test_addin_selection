const express = require("express");
require("dotenv").config();
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");
const cors = require("cors");
const productRouter = require('./routes/product.routes.js');
const userRouter = require('./routes/user.routes.js');
const app = express();

// Middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(multer({ dest: path.join(__dirname, 'public/img/uploads') }).single('image'));


// Routes
app.use('/api/v1/', userRouter)
app.use('/api/v1/', productRouter)


module.exports = { app };