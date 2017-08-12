const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;


let create_post = (req,res) => {
    let data = req.body;
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(data.password, salt);
    
    db.customer.create({
        name : data.name,
        gender : data.gender,
        password : hash,
        email: data.email,
        address: data.address,
        username: data.username,
        phone_number: data.phone_number
    })
    .then((result) =>{
        res.status(200).send(result)
    })
    .catch(err => {
        console.log(err);
    })
}

let findbyid_get = (req,res) => {
    let id = req.params.id;
    db.customer.findById(id)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(401).send(err)
    })
}

let findall_get = (req,res) => {
   db.customer.findAll()
   .then(data => {
       res.status(200).send(data)
   })
    .catch(err => {
        console.log(err)
    })
}

let edit_put = (req,res) => {
    let id = req.params.id;
    let data = req.body;
    db.customer.update({
        name : data.name,
        gender : data.gender,
        password : data.password,
        email: data.email,
        address: data.address,
        username: data.username,
        phone_number: data.phone_number
    },{
        where : {id:id}
    })
    .then((data) =>{
        res.status(200).send(data)
    })
    .catch(err => {
        console.log(err);
    })
}

let destory_delete = (req,res) => {
    let id = req.params.id;
    db.customer.destroy({
        where : {id:id}
    })
    .then(()=>{
        res.status(200).send("1 Rows customer Deleted")
    })
    .catch(err => {
        console.log(err)
    })
}


module.exports = {
    create_post,
    findall_get,
    findbyid_get,
    edit_put,
    destory_delete
}
