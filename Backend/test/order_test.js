const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');


describe('Testing Table Orders', () => {
    let id = "";
    it('Penambahan Table Orders', () => {
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
        })
    });

    it('Update Table Orders', () => {
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
        })
    });

    it('Read Table Orders', () => {
        chai.request(app)
        .get('/api/order/')
        .end((err,res)=>{
            res.should.have.status(200);
            res.should.have.be.a("Object");
        })
    })

    it('Delete Table Rows Orders', () => {
        chai.request(app)
        .delete(`/api/order/${id}`)
        .end((err,res)=>{
            res.should.have.status(200);
            console.log(res);
        })
    })
});