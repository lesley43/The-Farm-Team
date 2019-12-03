const request = require('supertest');
const {Type} = require('../../models/type');
const {User} = require('../../models/user');
const mongoose = require('mongoose');

let server;

describe('/api/types', () => {
  beforeEach(() => { server = require('../../index'); })
  afterEach(async () => { 
    await server.close(); 
    await Type.remove({});
  });

  describe('GET /', () => {
    it('should return all crop types', async () => {
      const types = [
        { name: 'cropType1' },
        { name: 'cropType2' },
      ];
      
      await Type.collection.insertMany(types);

      const res = await request(server).get('/api/types');
      
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some(t => t.name === 'cropType1')).toBeTruthy();
      expect(res.body.some(t => t.name === 'cropType2')).toBeTruthy();
    });
  });

  describe('GET /:id', () => {
    it('should return a crop type if valid id is passed', async () => {
      const type = new Type({ name: 'cropType1' });
      await type.save();

      const res = await request(server).get('/api/types/' + type._id);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('name', type.name);     
    });

    it('should return 404 if invalid id is passed', async () => {
      const res = await request(server).get('/api/types/1');

      expect(res.status).toBe(404);
    });

    it('should return 404 if no crop type with the given id exists', async () => {
      const id = mongoose.Types.ObjectId();
      const res = await request(server).get('/api/types/' + id);

      expect(res.status).toBe(404);
    });
  });

  describe('POST /', () => {

    // Define the path, and then in each test, we change 
    // one parameter that clearly aligns with the name of the 
    // test. 
    let token; 
    let name; 

    const exec = async () => {
      return await request(server)
        .post('/api/types')
        .set('x-auth-token', token)
        .send({ name });
    }

    beforeEach(() => {
      token = new User().generateAuthToken();      
      name = 'cropType1'; 
    })

    it('should return 401 if client is not logged in', async () => {
      token = ''; 

      const res = await exec();

      expect(res.status).toBe(401);
    });

    it('should return 400 if crop type is less than 5 characters', async () => {
      name = '1234'; 
      
      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should return 400 if crop type is more than 50 characters', async () => {
      name = new Array(52).join('a');

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should save the crop type if it is valid', async () => {
      await exec();

      const type = await Type.find({ name: 'cropType1' });

      expect(type).not.toBeNull();
    });

    it('should return the crop type if it is valid', async () => {
      const res = await exec();

      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('name', 'cropType1');
    });
  });

  describe('PUT /:id', () => {
    let token; 
    let newName; 
    let type; 
    let id; 

    const exec = async () => {
      return await request(server)
        .put('/api/types/' + id)
        .set('x-auth-token', token)
        .send({ name: newName });
    }

    beforeEach(async () => {
      // Before each test we need to create a crop type and 
      // put it in the database.      
      type = new Type({ name: 'cropType1' });
      await type.save();
      
      token = new User().generateAuthToken();     
      id = type._id; 
      newName = 'updatedName'; 
    })

    it('should return 401 if client is not logged in', async () => {
      token = ''; 

      const res = await exec();

      expect(res.status).toBe(401);
    });

    it('should return 400 if crop type is less than 5 characters', async () => {
      newName = '1234'; 
      
      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should return 400 if crop type is more than 50 characters', async () => {
      newName = new Array(52).join('a');

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should return 404 if id is invalid', async () => {
      id = 1;

      const res = await exec();

      expect(res.status).toBe(404);
    });

    it('should return 404 if crop type with the given id was not found', async () => {
      id = mongoose.Types.ObjectId();

      const res = await exec();

      expect(res.status).toBe(404);
    });

    it('should update the crop type if input is valid', async () => {
      await exec();

      const updatedType = await Type.findById(type._id);

      expect(updatedType.name).toBe(newName);
    });

    it('should return the updated crop type if it is valid', async () => {
      const res = await exec();

      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('name', newName);
    });
  });  

  describe('DELETE /:id', () => {
    let token; 
    let type; 
    let id; 

    const exec = async () => {
      return await request(server)
        .delete('/api/types/' + id)
        .set('x-auth-token', token)
        .send();
    }

    beforeEach(async () => {
      // Before each test we need to create a crop type and 
      // put it in the database.      
      type = new Type({ name: 'cropType1' });
      await type.save();
      
      id = type._id; 
      token = new User({ isAdmin: true }).generateAuthToken();     
    })

    it('should return 401 if client is not logged in', async () => {
      token = ''; 

      const res = await exec();

      expect(res.status).toBe(401);
    });

    it('should return 403 if the user is not an admin', async () => {
      token = new User({ isAdmin: false }).generateAuthToken(); 

      const res = await exec();

      expect(res.status).toBe(403);
    });

    it('should return 404 if id is invalid', async () => {
      id = 1; 
      
      const res = await exec();

      expect(res.status).toBe(404);
    });

    it('should return 404 if no crop type with the given id was found', async () => {
      id = mongoose.Types.ObjectId();

      const res = await exec();

      expect(res.status).toBe(404);
    });

    it('should delete the crop type if input is valid', async () => {
      await exec();

      const typeInDb = await Type.findById(id);

      expect(typeInDb).toBeNull();
    });

    it('should return the removed crop type', async () => {
      const res = await exec();

      expect(res.body).toHaveProperty('_id', type._id.toHexString());
      expect(res.body).toHaveProperty('name', type.name);
    });
  });  
});