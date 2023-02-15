const Post = require("../models/post.js");
const User = require("../models/user");

async function index(req, res) {
    try {
        const posts = await Post.getAll();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const post = await Post.getOneById(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}
async function create(req, res) {
   
    try {
        const data = req.body;
        const user = await User.getOneByUsername(data.username);
       
        const checkValues = ["post_body", "post_title"].every(p => Object.hasOwn(data, p))
        if (checkValues) {
            
            const post = await Post.create(data,user.id);
            res.status(201).send(post);
        } else {
            res.status(404).json({
                error: "Post body and title must be entered"
            })
        }
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}
 async function update(req, res) {
     try {
         const id = parseInt(req.params.id);
         const post = await Post.getOneById(id);
         const data = req.body;
         const result = await post.update(data);
         res.status(200).json(result);
     } catch (err) {
         res.status(404).json({ "error": err.message })
     }
 }

module.exports = {
    index,
    show,
    create,
    update
}
