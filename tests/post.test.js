const Post = require("../server/models/post")
let db = require("../server/database/connect")

describe("Testing the getAll function", () => {
    it('getAll returns an array', async () => {
        const posts = await Post.getAll();
        expect(posts).toBeInstanceOf(Array);
    });
})


describe('Post', () => {

  describe('create', () => {
    it('should create a new post', async () => {
      const data = { thread_id: 1, post_title: 'Test Post', post_body: 'This is a test post.' };
      const user_id = 1;

      const post = await Post.create(data, user_id);

      expect(post instanceof Post).toBe(true);

      const result = await db.query('SELECT * FROM post WHERE post_id = $1', [post.post_id]);
      expect(result.rows.length).toBe(1);
      expect(result.rows[0].post_title).toBe(data.post_title);
      expect(result.rows[0].post_body).toBe(data.post_body);
      expect(result.rows[0].user_id).toBe(user_id);
    });
  });
});

  
  




