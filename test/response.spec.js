const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;


describe('response', () => {
    // beforeEach(() => {
    //     request(app)
    // });

    it('json response', () => {
        request(app)
            .get('/course')
            .end((err, res) => {
                expect(res.body.id).to.be.equal('1');
                console.log(res.body);
                console.log(res.body.id)
            });
    });

    it('text response', () => {
        request(app)
            .get('/course')
            .end((err, res) => {
                expect(res.text).to.contains('1');
            });
    });

    it('status response', () => {
        request(app)
            .get('/course')
            .end((err, res) => {
                expect(res.ok).to.be.true;
            });
    });

});