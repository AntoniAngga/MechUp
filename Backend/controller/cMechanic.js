const db = require('../models');
var bcrypt = require('bcrypt');
const saltRounds = 10;

let create_post = (req,res) => {
    let data = req.body;
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(data.password, salt);
    db.mechanic.create({
        id_ktp: data.id_ktp,
        name: data.name,
        address: data.address,
        gender: data.gender,
        password: hash,
        phone_number: data.phone_number,
        username: data.username
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
    db.mechanic.findById(id)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(401).send(err)
    })
}

let findall_get = (req,res) => {
   db.mechanic.findAll()
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
    db.mechanic.update({
        id_ktp: data.id_ktp,
        name: data.name,
        address: data.address,
        gender: data.gender,
        password: data.password,
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
    db.mechanic.destroy({
        where : {id:id}
    })
    .then(()=>{
        res.status(200).send("1 Rows mechanic Deleted")
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