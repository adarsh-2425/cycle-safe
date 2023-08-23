const express = require('express');
const app = express();

const PORT = process.env.port || 3000;

//database
const connectDb = require('./db.js');
connectDb();

//express middleware for parsing json data
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: false }));

//auth route
const authRoute = require('./routes/authRoute');
app.use('/api/auth', authRoute);

// User Management Route
const userRoute = require('./routes/userRoute');
app.use('/api/user', userRoute);

// sos route
const sosRoute = require('./routes/sosRoute');
app.use('/api/sos', sosRoute);

// Im Safe route for sending custom messages
const imsafeRoute = require('./routes/imsafeRoute');
app.use('/api/imsafe', imsafeRoute);

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong');
});


//server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
});