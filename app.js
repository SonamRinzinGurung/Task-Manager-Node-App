const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config(); //get the MongoDB database url (secrete)
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler-middleware");

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

//error handling middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

//setting port value as set in the system environment or use 3000 as default
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //get a successful connection with the database
    //using environment variable to hide private information
    await connectDB(process.env.MONGO_URI);

    //after successful connection start listening at the specified port fot requests
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
