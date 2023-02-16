const Post = require("../server/models/post")
const User = require("../server/models/user");
let db = require("../server/database/connect")
const request = require('supertest');
const app = require('../server/app');
const { index, show, create, update } = require("../server/controllers/post")

// getAll function in models - post.js
describe("Testing the getAll function", () => {
    it('getAll returns an array', async () => {
        const posts = await Post.getAll();
        expect(posts).toBeInstanceOf(Array);
    });
})



  
  describe('Error handling', () => {

    it('should return a 500 error response when an error occurs in index', async () => {
      const req = {}
      const res = {
        status: jest.fn(() => res),
        json: jest.fn()
      }
      const err = new Error('An error occurred')
      jest.spyOn(Post, 'getAll').mockImplementation(() => { throw err })
  
      await index(req, res)
  
      expect(res.status).toHaveBeenCalledWith(500)
      expect(res.json).toHaveBeenCalledWith({ error: err.message })
    })



    it('should return a 404 error response when an error occurs in show', async () => {
        const req = { params: { id: 'invalid' } }
        const res = {
          status: jest.fn(() => res),
          json: jest.fn()
        }
        const err = new Error('invalid input syntax for type integer: \"NaN\"')
        jest.spyOn(Post, 'getOneById').mockImplementation(() => { throw err })
    
        await show(req, res)
    
        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({ error: err.message })
      })
    
    it('should return a 404 error response when an error occurs in create', async () => {
        const req = { body: { username: 'user', post_body: 'body', title: 'title' } }
        const res = {
          status: jest.fn(() => res),
          json: jest.fn()
        }
        const err = new Error('An error occurred')
        jest.spyOn(User, 'getOneByUsername').mockImplementation(() => { throw err })
    
        await create(req, res)
    
        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({ error: err.message })
      })


      it('should return a 404 error response when an error occurs in update', async () => {
        const req = { params: { id: 'invalid' }, body: {} }
        const res = {
          status: jest.fn(() => res),
          json: jest.fn()
        }
        const err = new Error('An error occurred')
        jest.spyOn(Post, 'getOneById').mockImplementation(() => { throw err })
    
        await update(req, res)
    
        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({ error: err.message })
      })


  })
  




