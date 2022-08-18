const { CustomAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  //check if the error is from the CustomAPIError
  if (err instanceof CustomAPIError) {
    //return the status and message of the created error
    return res.status(err.statusCode).json({ msg: err.message });
  }
  console.log(err);
  //for any other error return an standard 500 error
  return res.status(500).json({ msg: "Something went wrong please try again" });
};

//the app.js uses this middleware to handle any error
module.exports = errorHandlerMiddleware;
