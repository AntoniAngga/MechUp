const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');


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
            res.should.have.status(200)
            res.should.have.be.a("Object")
            res.body.id_customer.should.equal("1")
            id = res.body.id
            res.body.status.should.equal("accepted")
            res.body.location.should.equal('Jl. amasdasdwqeq')
            done();
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
            res.body.status.equal("accpted")
            res.body.location.should.equal('Jl. Buni Yano')
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
            console.log(res);
            done();
        })
    })
});