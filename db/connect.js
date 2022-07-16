const mongoose = require("mongoose");

const connectDB = (url) => {

  //passing the url of the database and additional options to avoid deprecation warnings
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

//the connectDB method is evoked in the app.js module
module.exports = connectDB;
