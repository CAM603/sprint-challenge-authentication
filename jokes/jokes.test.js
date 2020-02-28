const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('jokes router', () => {
    it('should run the tests', () => {
        expect(true).toBe(true)
    })
    beforeEach(async () => {
        await db('users').truncate();
    })

    it('should not allow access without token', async () => {
        const res = await request(server).get('/api/jokes');

        expect(res.status).toBe(401)
    })

    it('should return json formatted body (async)', async () => {
        const res = await request(server).get('/api/jokes')
        
        expect(res.type).toMatch(/json/)
    })

    it('should allow access with token', async () => {
        await request(server)
                .post('/api/auth/register')
                .send({username: 'cam', password: 'cam'})
            
        await request(server)
                .post('/api/auth/login')
                .send({username: 'cam', password: 'cam'})
        
        const res = await request(server).get('/api/jokes').set('Authorization', `token`)

        console.log(res.body)
    })
})