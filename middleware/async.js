/**
 *
 * @param {*} fn controller function
 * @returns an async function that has access to the req, res, and next values
 */

const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      // evoke the controller method logic
      await fn(req, res, next);
    } catch (error) {
      //pass the error to the next middleware (errorHandlerMiddleware) that will handle it
      next(error);
    }
  };
};


//the controller module uses the asyncWrapper to efficiently apply try-catch and async-await for all the controllers
module.exports = asyncWrapper;
