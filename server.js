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
// const connection = mongoose.connection;

// connection.once('open', function(){
//   console.log("MongoDB database connection establised successfully");
// })

// booksRoutes.route('/').get(function(req, res) {
//   Books.find(function(err, books){
//     if (err){
//       console.log(err);
//     }else {
//       res.json(books);
//     }
//   });
// });

// booksRoutes.route("/:id").get(function(req, res){
//   let id= req.params.id;
//   Books.findById(id, function(err, books){
//     res.json(books);
//   });
// });



// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

// app.use('/books', booksRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
