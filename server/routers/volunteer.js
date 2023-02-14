const { Router } = require("express");

const volunteerController = require("../controllers/volunteer");

const volunteerRouter = Router(); // Handles all volunteer requests


// Route definitions
volunteerRouter.post("/", volunteerController.createVolunteer);


module.exports = volunteerRouter;
