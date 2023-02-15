const Volunteer = require("../models/volunteers");


async function createVolunteer (req, res) {

    // Read the body
    const body = req.body

    try {
        // Check first has all required elements
        if (["name", "description", "date", "task_time", "email"].every(v => Object.hasOwn(body, v))) {
        
            const volunteer = await Volunteer.createVolunteer(body);
            console.log(volunteer);
            res.status(201).json({ message: "User registered" });
        } else {
            throw new Error("Invalid properties")
        }
    } catch (err) {
        console.log(err.message);
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    createVolunteer
}
