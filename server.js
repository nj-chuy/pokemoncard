const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const routes = require("./routes")

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Book";

mongoose.connect(MONGODB_URI);

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))

app.use(routes);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client','build', 'index.html')); //relative path
  });
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
