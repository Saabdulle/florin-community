const { Router } = require("express");
const postController = require("../controllers/post");

const postRouter = Router();

postRouter.get("/forum", postController.index);
postRouter.post("/forum", postController.create);

module.exports = postRouter;
