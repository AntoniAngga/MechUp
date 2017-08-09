const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');


describe('Testing Mechanic Table', () => {
    let id = "";
    it('Penambahan Mechanic Table 1 Rows', () => {
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
        })
    })

    it('Update Mechanic Table 1 Rows', () => {
        chai.request(app)
        .put(`/api/mechanic/${id}`)
        .send({
            id: 1,
            name: "Ade",
            address: "Jl. Patimura no 21",
            gender: "Male",
            password: "1"
        })
        .end((res,err)=>{
            res.should.have.status(200);
            res.body.name.should.equal("Ade");
            res.should.have.be.a("Object");
        })
    })

    it('View Mechanics Table Rows', () => {
        chai.request(app)
        .get(`/api/mechanic/${id}`)
        .end((res,err) => {
            res.should.have.status(200)
            res.body.name.should.equal("Ade")
            id = res.body.id
            res.body.gender.should.equal("Male")
        })
    })

    it('Delete Mechanics Table Rows', () => {
        chai.request(app)
        .get(`/api/mechanic/${id}`)
        .end((res,end) => {
            res.should.have.status(200)
            res.body.should.equal("Mechanics 1 rows deleted")
        })
    })
});