const { Router } = require("express");
const postController = require("../controllers/post");

const postRouter = Router();

postRouter.get("/", postController.index);
postRouter.post("/", postController.create);
postRouter.patch("/", postController.update);
postRouter.delete("/:id", postController.destroy)
module.exports = postRouter;
