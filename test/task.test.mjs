import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../app/app.js';
import { expect } from 'chai';

describe('GET /api/tasks', function() {
    it('should return all tasks', function(done) {
        supertest(app)
            .get('/api/tasks')
            .end(function(err, res) {
                expect(res.body.tasks).to.be.an('array');
                expect(res.body).to.have.property('totalPages');
                expect(res.body).to.have.property('currentPage');
                done();
            });
    });

    after(async () => {
        await mongoose.disconnect();
    });
});
