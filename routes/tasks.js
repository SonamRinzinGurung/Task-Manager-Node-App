const express = require("express");
const router = express.Router();

//getting all the controller methods
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

//base rout is api/v1/tasks
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);


// the router is used by the app.js to handle the request for each route with different type of methods
module.exports = router;
