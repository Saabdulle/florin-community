const bcrypt = require('bcrypt');
const db = require("../server/database/connect");
const User = require("../server/models/user");
const Token = require("../server/models/token");
const {register, login, logout} = require("../server/controllers/user");


describe("User model tests", () => {
  it("should get one by ID", async () => {
    const response = await User.getOneById(1);
    expect(typeof response).toBe("object");
  });
  it("should get one by username", async () => {
    const response = await User.getOneByUsername("Martin");
    expect(typeof response).toBe("object");
  });
  it("should create a user", async () => {
    const newUser = {
      username: "Test",
      password: "testuser",
      email: "test@jest"
    }
    const response = await User.create(newUser);
    expect(typeof response).toBe("object");
    const isNew = await User.getOneByUsername("Test");
    expect(isNew).toBeTruthy();
  });
  it("should delete a user", async () => {
    const testUser = await User.getOneByUsername("Test");
    const del = await testUser.destroy();
    expect(del.command).toBe('DELETE');
    expect(del.rowCount).toBe(1);
  });
});


describe('User Controller', () => {
  const mockUser = {
    id: 1,
    username: "test",
    password: "password",
    email: "test@jest"
  };

  jest.mock("../server/models/user", () => {
    return {
      create: jest.fn().mockResolvedValue(mockUser)
    };
  });



  describe("register", () => {
    let req, res;

    beforeEach(() => {
      req = {
        body: mockUser
      };
      res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        json: jest.fn()
      };
    });

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("should register a new user with a hashed password", async () => {
      const bcryptMock = jest.spyOn(bcrypt, "hash").mockResolvedValue("hashedpassword");
      jest.spyOn(User, 'create').mockResolvedValue(mockUser);

      await register(req, res);

      expect(User.create).toHaveBeenCalledWith(mockUser);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith(mockUser);
      expect(bcryptMock).toHaveBeenCalledWith("password", expect.any(String));
    });

    test("should handle errors", async () => {
      const mockError = new Error("Unable to register");
      User.create.mockRejectedValue(mockError);

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: true,
        message: "Unable to register\n" + mockError.message
      });
    });
  });

  describe('login', () => {
    const req = {
      body: {
        username: 'john_doe',
        password: 'password123'
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('should successfully log in with valid credentials', async () => {
      const user = {
        id: 1,
        username: 'john_doe',
        password: 'hashedPassword'
      };
      jest.spyOn(User, "getOneByUsername").mockResolvedValue(user);
      jest.spyOn(bcrypt, "compare").mockResolvedValue(true);
      jest.spyOn(Token, "create").mockResolvedValue({ token: 'abc123' });

      await login(req, res);

      expect(User.getOneByUsername).toHaveBeenCalledWith('john_doe');
      expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashedPassword');
      expect(Token.create).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        authenticated: true,
        token: 'abc123',
      });
    });

    test('should throw an error with invalid credentials', async () => {
      jest.spyOn(User, "getOneByUsername").mockResolvedValue("john_doe");
      jest.spyOn(bcrypt, "compare").mockResolvedValue(false);

      await login(req, res);

      expect(User.getOneByUsername).toHaveBeenCalledWith("john_doe");
      expect(bcrypt.compare).toHaveBeenCalledWith('password123', undefined);
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({
        error: true,
        message: 'Invalid credentials',
      });
    });

    test('should catch and handle errors', async () => {
      const err = new Error('Internal server error');
      User.getOneByUsername.mockRejectedValue(err);

      await login(req, res);

      expect(User.getOneByUsername).toHaveBeenCalledWith('john_doe');
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({
        error: true,
        message: 'Internal server error',
      });
    });
  });

  describe('logout', () => {
    const req = {
      headers: {}
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    beforeEach(() => {
      jest.clearAllMocks();
    });
    afterAll(() => {
      db.end();
    })

    it('should return a 403 and error message if not logged in', async () => {
      req.headers.authorization = null;

      await logout(req, res);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Unable to logout',
        error: "Unable to locate token"
      });
    });

    it('should destroy the token and return a 200 if logged in', async () => {
      const token = {
        token: 'testtoken',
      };

      jest.spyOn(Token, 'getOneByToken').mockResolvedValue(token);
      jest.spyOn(Token, 'destroy').mockResolvedValue();
      req.headers.authorization = token.token;

      await logout(req, res);

      expect(Token.getOneByToken).toHaveBeenCalledWith(token.token);
      expect(Token.destroy).toHaveBeenCalledWith(token.id);
    });

    it('should return 403 and error message if error during logout', async () => {
      const userToken = 'testtoken';
      jest.spyOn(Token, 'getOneByToken').mockRejectedValue(new Error('Test error'));

      req.headers.authorization = userToken;

      await logout(req, res);

      expect(Token.getOneByToken).toHaveBeenCalledWith(userToken);
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Unable to logout',
        error: 'Test error'
      });
    });
  });
});