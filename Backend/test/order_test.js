const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp);


describe('Testing Table Orders', () => {
    let id = "";
    it('Penambahan Table Orders', (done) => {
        chai.request(app)
        .post('/api/order')
        .send({
            id_customer: 1,
            id_mechanic: 1,
            id_vechicle: 1,
            status: 'accepted',
            location: 'Jl. amasdasdwqeq'
        })
        .end((err,res)=> {
            id = res.body.id
            res.should.have.status(200)
            res.should.have.be.a("Object")
            res.body.id_customer.should.equal(1)
            done()
        })
    });

    it('Update Table Orders', (done) => {
        chai.request(app)
        .put(`/api/order/${id}`)
        .send({
            id_customer: 1,
            id_mechanic: 1,
            id_vechicle: 1,
            status: 'accepted',
            location: 'Jl. Buni yano'
        })
        .end((err,res)=>{
            res.should.have.status(200)
            res.should.have.be.a("Object")
            done();
        })
    });

    it('Read Table Orders', (done) => {
        chai.request(app)
        .get('/api/order/')
        .end((err,res)=>{
            res.should.have.status(200);
            res.should.have.be.a("Object");
            done();
        })
    })

    it('Delete Table Rows Orders', (done) => {
        chai.request(app)
        .delete(`/api/order/${id}`)
        .end((err,res)=>{
            res.should.have.status(200);
            res.text.should.equal("1 Rows order Deleted")
            done();
        })
    })
});