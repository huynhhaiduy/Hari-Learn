require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const { options } = require('./routes/auth');

connectDB();
const app = express();
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://luxury-kashata-6b6a6c.netlify.app' : '*',
    optionsSuccessStatus: 200,
    methods: 'GET,PUT,POST,DELETE',
  })
);