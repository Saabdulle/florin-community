const fs = require("fs");
require("dotenv").config();

const db = require("./connect");

const setup = fs.readFileSync("./database/setup.sql").toString();

db.query(setup)
    .then(data=>{
        db.end();
        console.log("Set-up complete");
    })
    .catch(err => console.log(err));