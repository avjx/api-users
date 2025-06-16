import request from 'supertest';
import app from '../src/app.js';

describe('API /users', () => {
    it('should return 200 on GET /users', async () => {
        const response = await request(app).get('/users')
        expect(response.statusCode).toBe(200)
    })

    it('should create a new user on POST /users', async () => {
        const response = await request(app)
        .post('/users')
        .send({
            name: 'John Doe',
            email: 'john@example.com'
        });
        expect(response.statusCode).toBe(201)
        expect(response.body).toHaveProperty('_id')
    })
})