const db = require('../models');

var bcrypt = require('bcrypt');
const saltRounds = 10;

let do_login_mechanic = (req,res) => {
    let data = req.body;
    db.mechanic.findAll({
        where: {
            username: data.username
        }
      })
    .then(result => {
        if(result[0].dataValues !== undefined){
            if(bcrypt.compareSync(data.password, result[0].dataValues.password)){
                res.status(200).send(result)
                db.login.findOrCreate({
                    defaults: {
                        id_customer: null,
                        id_mechanic: result[0].dataValues.id,//ini untuk id mechanicnya
                        status: "Online",
                        role: "Mechanic"
                    },
                    where: { id_mechanic : result[0].dataValues.id }
                  }).then(data=> {
                      res.status(200).send(result[0].dataValues)
                  }).catch(err => {
                      res.status(500).send(err)
                  })
            } else {
                res.status(500).send("Wrong Passwords")
            }
        }
    })
    .catch(err => {
        res.status(500).send("Wrong username")
    })
}

let do_logout_mechanic = (req,res) => {
    let id = req.params.id
    db.login.destroy({
        where: {
            id_mechanic: id
        }
    })
    .then(data => {
        res.status(200).send("data mechanics login sudah di hapus, jika mau akses login lagi")
        //disini id nya di hapus ya broo
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

module.exports = {
    do_login_mechanic,
    do_logout_mechanic
}