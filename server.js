const mongoose = require("mongoose");
const express = require("express");

const app = express();

const workout = require("./models/workouts.js");
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app); 

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});