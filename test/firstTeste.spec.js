const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({ "ok": "response" });
});

describe('First test', () => {
    it('Ok response', () => {
        request(app)
            .get('/first')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
            });
    });

    it.skip('Mocky Ok response', (done) => {
        request('https://run.mocky.io')
            .get('/v3/0e81bf78-6f56-4c8e-9023-76d498d4131d')
            .expect(200, done)
    });
});