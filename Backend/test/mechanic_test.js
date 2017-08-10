const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

describe('Testing Mechanic Table', () => {
    let id = "";
    it('Penambahan Mechanic Table 1 Rows', (done) => {
        chai.request(app)
        .post('/api/mechanic/')
        .send({
            id: 1,
            name: "Andrew Senewe",
            address: "Jl. Patimura no 21",
            gender: "Male",
            password: "1234"
        })
        .end((err,res) => {
            res.should.have.status(200);
            res.should.have.be.a("Object");
            id = res.body.id
            res.body.name.should.equal("Andrew Senewe");
            res.body.password.should.equal("1234");
            done();
        })
    })

    it('Update Mechanic Table 1 Rows', (done) => {
        chai.request(app)
        .put(`/api/mechanic/${id}`)
        .send({
            id: 1,
            name: "Ade",
            address: "Jl. Patimura no 21",
            gender: "Male",
            password: "1"
        })
        .end((err,res)=>{
            res.should.have.status(200);
            res.should.have.be.a("Object");
            res.body[0].should.equal(1);
            done();
        })
    })

    it('View Mechanics Table Rows', (done) => {
        chai.request(app)
        .get(`/api/mechanic/${id}`)
        .end((err,res) => {
            res.should.have.status(200)
            res.body.name.should.equal("Ade")
            id = res.body.id
            res.body.gender.should.equal("Male")
            done();
        })
    })

    it('Delete Mechanics Table Rows', (done) => {
        chai.request(app)
        .delete(`/api/mechanic/${id}`)
        .end((err,res) => {
            res.should.have.status(200)
            res.text.should.equal("1 Rows mechanic Deleted")
            done();
        })
    })
});