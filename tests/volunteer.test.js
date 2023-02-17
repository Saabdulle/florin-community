const Volunteer = require("../server/models/volunteers");
const { createVolunteer } = require('../server/controllers/volunteer');
let db = require("../server/database/connect")



describe('createVolunteer', () => {
    it('should insert a new volunteer into the database and return a Volunteer instance', async () => {
      const volunteer = await Volunteer.createVolunteer({
        name: 'John Doe',
        description: 'Clean up park',
        date: '2023-03-15',
        task_time: '10:00',
        email: 'johndoe@example.com',
      });
  
      expect(volunteer).toBeInstanceOf(Volunteer);
    });
  });



  describe('createVolunteer', () => {
    it('should return a 404 response if body is missing required properties', async () => {
      const req = { body: {
        name: 'John Doe',
        description: 'Clean up park',
        date: '2023-03-15',
        task_time: '10:00',
      }};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await createVolunteer(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "Invalid properties" });
    });
  })

describe('createVolunteer', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  
  afterAll(()=>{
    db.end();
  })
  it('should create a new volunteer and return a 201 response', async () => {
    const req = { body: {
      name: 'John Doe',
      description: 'Clean up park',
      date: '2023-03-15',
      task_time: '10:00',
      email: 'johndoe@example.com',
    }};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    const mockVolunteerInstance = new Volunteer(req.body);
    const createVolunteerSpy = jest.spyOn(Volunteer, 'createVolunteer');
    createVolunteerSpy.mockResolvedValueOnce(mockVolunteerInstance);


    await createVolunteer(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: "User registered" });

    expect(createVolunteerSpy).toHaveBeenCalledWith(req.body);
  });
});


