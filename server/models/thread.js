const db = require("../database/connect");

class Thread {
    constructor({thread_id, user_id, thread_title, thread_body, thread_date}) {
        this.id = thread_id;
        this.user_id = user_id;
        this.title = thread_title;
        this.body = thread_body;
        this.date = thread_date;
    }

    static async getAll() {
        let response = await db.query("SELECT * FROM thread");
        return response.rows.map(t => new Thread(t))
    }
    static async create(data,user_id) {
        let q = {
            text: "INSERT INTO thread (user_id, thread_title, thread_body) VALUES ($1, $2, $3) RETURNING *;",
            values: [user_id, data.thread_title, data.thread_body]
        }
        let response = await db.query(q);
        return response.rows[0];
    }
}
module.exports = Thread;
