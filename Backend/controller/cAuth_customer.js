const db = require('../models');

var bcrypt = require('bcrypt');
const saltRounds = 10;

let do_login_customer = (req,res) => {
    let data = req.body;
    db.customer.findAll({
        where: {
            username: data.username
        }
      })
    .then(result => {
        if(result[0].dataValues !== undefined){
            if(bcrypt.compareSync(data.password, result[0].dataValues.password)){
                //disini masukin ke table login bro
                db.login.findOrCreate({
                    defaults: {
                        id_customer: result[0].dataValues.id,
                        id_mechanic: null,//ini untuk id mechanicnya
                        status: "Online",
                        role: "Customers",
                        lat: data.lat,
                        long: data.long
                    },
                    where: { id_customer : result[0].dataValues.id }
                  }).then(result=> {
                      res.status(200).send(result)
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

let do_logout_customer = (req,res) => {
    let id = req.params.id
    db.login.destroy({
        where: {
            id_customer: id
        }
    })
    .then(data => {
        res.status(200).send("data customers in login sudah di hapus, jika mau login lagi")
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {
    do_login_customer,
    do_logout_customer
}