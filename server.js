const express = require("express");
const app = express();
// const path = require("path");
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const routes = require("./routes")
// const booksRoutes = express.Router();

// let Books = require("./models/book");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose.connect('mongodb://localhost/Book', { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
