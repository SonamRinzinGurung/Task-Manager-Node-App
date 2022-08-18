/**
 * middleware function to handle incorrect url route
 * @param {*} req
 * @param {*} res
 * @returns response with 404 error
 */

const notFound = (req, res) => res.status(404).send("route not found...");

//the app.js uses this middleware to handle 404 errors
module.exports = notFound;
