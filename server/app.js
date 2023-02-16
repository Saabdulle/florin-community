const express = require("express");
const cors = require("cors");
const path = require("path");

const logRoutes = require("./middleware/logger");
const postRouter = require('./routers/post');
const userRouter = require("./routers/user");
const threadRouter = require("./routers/thread");
const volunteerRouter = require("./routers/volunteer");
const app = express();

app.use(cors());
app.use(express.json());
app.use(logRoutes);
app.use("/", express.static(path.join(__dirname, "..", "client")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "HTML", "welcome.html"));

})

app.use("/threads", threadRouter);
app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/volunteers", volunteerRouter);

module.exports = app;
