const Thread = require("../models/thread.js");
const User = require("../models/user");
async function index(req, res) {
    try {
        const thread = await Thread.getAll();
        res.status(200).json(thread);
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
}

  
async function create(req, res) {
   
    try {
        const data = req.body;
        const user = await User.getOneByUsername(data.username);
       
        const checkValues = ["thread_title","thread_body"].every(p => Object.hasOwn(data, p))
        if (checkValues) {
            
            const thread = await Thread.create(data, user.id);
            res.status(201).send(thread);
        } else {
            res.status(404).json({
                error: "Title must be entered"
            })
        }
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}
module.exports = {
    index,
    create
}
