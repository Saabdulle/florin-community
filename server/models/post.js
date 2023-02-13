const db = require("../database/connect");

class Post {
    constructor({post_id, thread_id, title, post_body, post_date, user_id}){
        this.post_id = post_id;
        this.thread_id = thread_id;
        this.user_id = user_id;
        this.title = title;
        this.post_body = post_body;
        this.post_date = post_date
    }

    static async getAll () {
        let response = await db.query("SELECT * FROM post;")
        return response.rows.map(g => new Post(g));
    }
    static async getOneById(id){
        let response = await db.query("SELECT * FROM post WHERE post_id = $1;", [id]);
        // Add error handling
        return new Post(response.rows[0]);
    }
    static async create(data,user_id,thread_id){
        let q = {
            text: "INSERT INTO  (title, post_body) VALUES ($1, $2) RETURNING post_id;",
            values: [data.title, data.post_body]
        }
        let response = await db.query(q);
        const newUser = await User.getOneById(response.rows[0].user_id)
        return newUser;
    }
}

module.exports = Post;
