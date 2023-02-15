const Volunteer = require("../server/models/volunteers");
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
  

