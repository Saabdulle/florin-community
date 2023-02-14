const Volunteer = require("../models/volunteer");


async function create (req, res) {

    // Read the body
    const body = req.body

    try {
        // Check first has all required elements
        if (["name", "description", "date", "task_time", "email"].every(p => Object.hasOwn(body, p))) {
        
            const volunteer = await Volunteer.create(body);
            res.status(201).json(volunteer);
        } else {
            throw new Error("Invalid properties")
        }
    } catch (err) {
        console.log(err.message);
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    create
}
