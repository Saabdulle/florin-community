let db = require("../database/connect")

class Volunteer {

    constructor ({ volunteer_id, volunteer_full_name, volunteer_task, date, task_time, volunteer_email }) {
        this.id = volunteer_id,
        this.name = volunteer_full_name,
        this.description = volunteer_task,
        this.date = date,
        this.task_time = task_time,
        this.volunteer_email;
    }

    static async create({ name, description, date, task_time, email }) {
        const response = await db.query('INSERT INTO volunteers (volunteer_full_name, volunteer_task, date, task_time, volunteer_email) VALUES ($1, $2, $3, $4, $5) RETURNING *;', [name, description, date, task_time, email]);

        return response.rows.map(v => new Volunteer(v))
    }


}

module.exports = Volunteer;
