const express = require("express");
const cors = require("cors");
const path = require("path");

const logRoutes = require("./middleware/logger");
const postRouter = require('./routers/post');
const userRouter = require("./routers/user");
const volunteerRouter = require("./routers/volunteer");
const app = express();

app.use(cors());
app.use(express.json());
app.use(logRoutes);
console.log(path.join(__dirname, "..", "client", "welcome.html"));
app.use("/", express.static(path.join(__dirname, "..", "client")));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "HTML", "welcome.html"));

})

app.use("/forum", postRouter);
app.use("/users", userRouter);
app.use("/volunteer", volunteerRouter);

module.exports = app;
