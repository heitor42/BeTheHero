const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ong', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create new ONG', async() => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "LestOfUs",
                email: "withoutus@yahoo.com",
                whatsapp: "553699996666",
                city: "Itu",
                uf: "SP"
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});