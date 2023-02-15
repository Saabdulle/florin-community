const { Router } = require("express");
const threadController = require("../controllers/thread");

const threadRouter = Router();

threadRouter.get("/", threadController.index);
threadRouter.post("/", threadController.create);
//postRouter.patch("/", postController.update);

module.exports = threadRouter;
