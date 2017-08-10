const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

describe('Search chronology and get Mechanic', () => {
    let id = ""
    it('First Time customers find new Mechanic', (done) => {
        chai.request(app)
        .post('/api/order')
        .send({
            id_customer: 1,
            id_vehicle: 1,
            status: 'waiting',
            location: 'Lat:-6.260719 Long:106.781616'
        })
        .end(function(err,res){
            id = res.body.id;
            chai.request(app)
            .get(`/api/order/${id}`)
            .end((err,res)=> {
                res.should.have.status(200);
                res.should.have.be.a("Object");
                res.order_status.should.equal('waiting');
                res.order_location.should.equal('Lat:-6.260719 Long:106.781616');
                done();
            })
            done();
        })
    });
    it('Mechanic accept the new customers', (done) => {
        chai.request(app)
        .put(`/api/order/${id}`)
        .send({
            id_mechanic: 1,
            status: 'Accepted'
        })
        .end(function(err,res) {
            chai.request(app)
            .get(`/api/order/${id}`)
            .end((err,res)=> {
                res.should.have.status(200);
                res.should.have.be.a("Object");
                res.order_status.should.equal('Accepted');
                res.mech_id.should.equal(1);
                done();
            })
        })
        done();
    })
    it('Mechanic done the vehicle services', (done) => {
        chai.request(app)
        .put(`/api/order/${id}`)
        .send({
            status: 'Done'
        })
        .end(function(err,res) {
            chai.request(app)
            .get(`/api/order/${id}`)
            .end((err,res)=> {
                res.should.have.status(200);
                res.should.have.be.a("Object");
                res.order_status.should.equal("Done");
                done();
            })
        })
        done()
    })
});