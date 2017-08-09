const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');


describe('Testing Table Vehicle', () => {
    let id = "";
    it('Penambahan Table Vehicle', () => {
        chai.request(app)
        .post('/api/vehicle/')
        .send({
            type: "CX-5",
            tahun: "2017",
            merek: "Mazda",
            id_customer: "2",
        })
        .end((err,res)=>{
            res.should.have.status(200);
            res.should.have.be.a("Object");
            res.body.type.should.equal("CX-5");
            id = res.body.id
            res.body.merek.should.equal("Mazda")
        })
    });

    it('Update Table Vehicle', () => {
        chai.request(app)
        .put(`/api/vehicle/${id}`)
        .send({
            type: "X-Trail",
            tahun: "2017",
            merek: "Nissan",
            id_customer: "2",
        })
        .end((err,res)=> {
            res.should.have.status(200);
            res.should.have.be.a("Object");
            res.body.type.should.equal("X-Trail");
            res.body.merek.should.equal("Nissan");
        })
    })

    it('Read Table Vehicle', () => {
        chai.request(app)
        .get(`/api/vehicle/${id}`)
        .send({
            type: "X-Trail",
            tahun: "2017",
            merek: "Nissan",
            id_customer: "2",
        })
        .end((err,res) => {
            res.should.have.status(200);
            res.should.have.be.a("Object");
            res.body.type.should.equal("X-Trail");
            res.body.merek.should.equal("Nissan");
        })
    })

    it('Delete Table Vehicle', () => {
        chai.request(app)
        .delete(`/api/vehicle/${id}`)
        .end((err,res) => {
            res.should.have.status(200);
            res.should.have.be.a("String");
            res.body.should.equal("1 Rows Vehicle Deleted");
        })
    })
});