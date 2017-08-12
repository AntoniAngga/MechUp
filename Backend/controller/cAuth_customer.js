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
                res.status(200).send(result)
                //disini masukin ke table login bro
                db.login.create({
                    id_customer: data.online,
                    id_mechanic: null,
                    status: data.status,
                    role: data.role
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
    db.login.destory({
        where: {
            id_customer: id
        }
    })
    .then(data => {
        console.log("data customers in login sudah di hapus, jika mau login lagi")
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {
    do_login_customer,
    do_logout_customer
}