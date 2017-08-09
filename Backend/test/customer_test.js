const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');


describe('Testing Table Customer', function () {
  let id = "";
    it('Penambahan dengan data User yang sama', function (done) {
        chai.request(app)
            .post('/api/customer')
        .send({
            name: "Admin",
            gender: "Male",
            password: "admin123",
            email: "antoniangga14@gmail.com",
            address: "Jl. asdasdwqeqweq"
        })
        .end(function(err,res){
            res.should.have.status(200);
            res.should.have.be.a("Object");
            id = res.body.id;
            res.body.name.should.equal("Admin");
            res.body.gender.should.equal("Male");
            res.body.email.should.equal("antoniangga14@gmail.com");
            done();
        })
    });

    it('Update Account dengan user yang sama', (done) => {
        chai.request(app)
        .put(`/api/customer/${id}`)
        .send({
            name: "Antoniangga",
            gender: "Male",
            password: "admin123",
            email: "antoniangga14@gmail.com",
            address: "Jl. asdasdwqeqweq"
        })
        .end( () => {
            res.should.have.status(200);
            res.should.have.be.a("Object");
            id = res.body.id
            res.body.name.should.equal("Antoniangga");
            res.body.gender.should.equal("Male");
            done();
        })
    });

    it("Menampikan Data User", function(done) {
        chai.request(app)
        .get('/api/customer')
        .end(function(err,res) {
            res.should.have.status(200);
            res.should.have.be.a("Object");
            res.body[0].name.should.equal("Antoni Angga");
            res.body[0].gender.should.equal("Male");
            res.body[0].email.should.equal("antoniangga14@gmail.com");
        done();
        })
    });

    it("Delete Data User", (done) => {
        chai.request(app)
        .delete(`/api/customer/${id}`)
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.equal("1 Rows Customer data deleted")
            done();
        })
    })
})
    