process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');
const mongoose = require('mongoose');
const saveTestData = require('../seed/testSeed');

const PORT = require('../config').PORT.test;
const ROOT = `http://localhost:${PORT}/api`;

require('../server');

describe('API ROUTES', () => {

    before(done => {
        mongoose.connection.once('connected', () => {
            mongoose.connection.db.dropDatabase();
        });
        saveTestData(() => {
            done()
        })
    });
    after(done => {
        mongoose.connection.db.dropDatabase(() => {
            console.log('Test database dropped');
            done();
        })
    });
    describe('GET all bins - /bins', () => {
        it('returns all the bins data', (done) => {
            request(`${ROOT}`)
                .get('/bins')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.error).to.equal(false);
                    done();
                });
        });
    });
    describe('GET all collection data - /collections', () => {
        it('returns all the collection data', (done) => {
            request(`${ROOT}`)
                .get('/collections')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.error).to.equal(false);
                    done();
                });
        });
    });
    describe('GET all packaging data - /packaging', () => {
        it('returns all the packaging data', (done) => {
            request(`${ROOT}`)
                .get('/packaging')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.error).to.equal(false);
                    done();
                });
        });
    });
    describe('GET all recycling centre data - /recyclingcentres', () => {
        it('returns all the recycling centre data', (done) => {
            request(`${ROOT}`)
                .get('/recyclingcentres')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.error).to.equal(false);
                    done();
                });
        });
    });
    describe('GET all postcodes data - /postcodes', () => {
        it('returns all the postcodes data', (done) => {
            request(`${ROOT}`)
                .get('/postcodes')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.error).to.equal(false);
                    done();
                });
        });
    });
    describe('GET /bins?packaging=plastic&council=manchester', () => {
        it('returns correct bin and council data fom query', (done) => {
            request(`${ROOT}`)
                .get('/bins?packaging=plastic&council=manchester')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.error).to.equal(false);
                    expect(response.body.bins[0].bin).to.equal('brown');
                    done();
                });
        });
    });
    describe('GET /collections?council=bolton', () => {
        it('returns correct councils from collection query', (done) => {
            request(`${ROOT}`)
                .get('/collections?council=bolton')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.error).to.equal(false);
                    expect(response.body.collections[0].council).to.equal('bolton');
                    done();
                });
        });
    });
});