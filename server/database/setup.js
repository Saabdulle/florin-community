const fs = require("fs");
require("dotenv").config();

const db = require("./connect");

const setup = fs.readFileSync("./server/database/setup.sql").toString();
const seed = fs.readFileSync("./server/database/seed.sql").toString();

async function createTables(){
    await db.query(setup);
    await db.query(seed);
    db.end();
    console.log(("Database ready."));
}
createTables();