const Thread = require("../server/models/thread");
const User = require("../server/models/user");
let db = require("../server/database/connect")
const { index, create } = require("../server/controllers/thread");


  describe("Index function in controllers", () => {
    it("should return a 500 status with error message if getAll method throws an error", async () => {
      const errorMessage = "Failed to retrieve threads";
      jest.spyOn(Thread, "getAll").mockRejectedValue(new Error(errorMessage));
      
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      
      await index(req, res);
      
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });


  describe("Create function in controllers", () => {
    it("should return a 404 status with error message if getOneByUsername method throws an error", async () => {
      const errorMessage = "Failed to retrieve user";
      jest.spyOn(User, "getOneByUsername").mockRejectedValue(new Error(errorMessage));
      
      const req = { body: { username: "testuser", thread_title: "Test title", thread_body: "Test body" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      
      await create(req, res);
      
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  })


