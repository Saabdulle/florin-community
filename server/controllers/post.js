const { message } = require("statuses");
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
async function ascend(req, res) {
    
    try {
        const posts = await Post.getAsc();
       
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
}
async function descend(req, res) {
    try {
        const posts = await Post.getDesc();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const post = await Post.getByThreadId(id);
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
         
        const data = req.body;
        const post = await Post.getOneById(data.post_id);
         const result = await post.changePost(data);
         res.status(200).json(result);
     } catch (err) {
         res.status(404).json({ "error": err.message })
     }
 }

 async function destroy(req,res) {
    const id = req.params.id;

    try {

        // Get the mushroom
        const p = await Post.getOneById(id);
        
        // Delete the mushroom
        const deleted = await p.delete();
        
        // Report back
        if (deleted) {
            res.status(204);
        } else {
            throw new Error("Deletion failed.");
        }

    } catch (err) {
        console.log(err.message);
        res.status(404).json({
            error: true,
            message: `Unable to delete post with id '${id}'.`
        })
    }
 }

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    ascend,
    descend
}
