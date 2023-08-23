const express = require('express');
const app = express();

const PORT = process.env.port || 3000;

//database
const connectDb = require('./db.js');
connectDb();

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong');
};


//server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
});