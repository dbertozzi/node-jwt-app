const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db!')
);

// import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// middleware
app.use(express.json());

// route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute)

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}...`));
