import request from 'supertest';
import app from '.../src/index.js';

describe('API /users', () =>{
    it('should return 200 on GET /users', async() => {
        const response = await request(app).get('/users')
        expect(response.statusCode).toBe(200)
    })
})