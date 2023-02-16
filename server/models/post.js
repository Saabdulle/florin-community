const db = require("../database/connect");

class Post {
    constructor({post_id, thread_id, post_title, post_body, post_date, user_id}){
        this.post_id = post_id;
        this.thread_id = thread_id;
        this.user_id = user_id;
        this.title = post_title;
        this.post_body = post_body;
        this.post_date = post_date
    }

    static async getAll () {
        let response = await db.query("SELECT * FROM post;")
        return response.rows.map(g => new Post(g));
    }
    static async getAsc () {
        let response = await db.query("SELECT * FROM post ORDER BY post_date;")
        return response.rows.map(g => new Post(g));
    }
    static async getDesc () {
        let response = await db.query("SELECT * FROM post ORDER BY post_date DESC;")
        return response.rows.map(g => new Post(g));
    }
    static async getOneById(id){
        let response = await db.query("SELECT * FROM post WHERE post_id = $1;", [id]);
        // Add error handling
        return new Post(response.rows[0]);
    }
    static async getByThreadId(id){
        let response = await db.query("SELECT * FROM post WHERE thread_id = $1;", [id]);
        return response.rows.map(p => new Post(p));
    }
    static async create(data,user_id){
        let q = {
            text: "INSERT INTO post (post_title, post_body, user_id, thread_id) VALUES ($1, $2, $3, $4) RETURNING post_id;",
            values: [data.post_title, data.post_body, user_id, data.thread_id]
        }
        let response = await db.query(q);
        const newPost = await Post.getOneById(response.rows[0].post_id)
        return newPost;
    }

      async changePost (data) {
         const response = await db.query("UPDATE post SET post_body = $1 WHERE post_id = $2 RETURNING *;",
             [ data.post_body, this.post_id ]);
         if (response.rows.length != 1) {
             throw new Error("Unable to update votes.")
         }
         return new Post(response.rows[0]);
     }
     async delete() {

        const res = await db.query("DELETE FROM post WHERE post_id = $1 RETURNING *;", [ this.post_id ]);

        if (res.rows[0]) {
            return true;
        } else {
            throw new Error("Unable to delete post");
        };
    }
}

module.exports = Post;
