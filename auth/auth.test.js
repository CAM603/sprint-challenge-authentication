const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('authentication router', () => {
    it('should run the tests', () => {
        expect(true).toBe(true)
    })
    beforeEach(async () => {
        await db('users').truncate();
    })
    describe('register', () => {
        it('returns 201 created', async () => {
            const res = await request(server)
                .post('/api/auth/register')
                .send({username: 'cam', password: 'cam'})
            
            expect(res.status).toBe(201)
        })
        it('add a user to database', async () => {
            await request(server)
                .post('/api/auth/register')
                .send({username: 'cam', password: 'cam'})
            
            const users = await db('users')
            expect(users).toHaveLength(1)
        })
    })
    describe('login', () => {
        it('returns 200 OK', async () => {
            await request(server)
                .post('/api/auth/register')
                .send({username: 'cam', password: 'cam'})
            
            let res = await request(server)
                .post('/api/auth/login')
                .send({username: 'cam', password: 'cam'})
            
            expect(res.status).toBe(200)
        })
        it('provides a token', async () => {
            await request(server)
                .post('/api/auth/register')
                .send({username: 'cam', password: 'cam'})
            
            let res = await request(server)
                .post('/api/auth/login')
                .send({username: 'cam', password: 'cam'})
            
            expect(res.text.token).toBeTruthy()
        })
    })
})