const db = require('../models');

let create_post = (req,res) => {
    let data = req.body;
    db.vehicle.create({
        type: data.type,
        tahun: data.tahun,
        merek: data.merek,
        id_customer: data.id_customer
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
    db.vehicle.findById(id)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(401).send(err)
    })
}

let findall_get = (req,res) => {
   db.vehicle.findAll()
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
    db.vehicle.update({
        type: data.type,
        tahun: data.tahun,
        merek: data.merek,
        id_customer: data.id_customer
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
    db.vehicle.destroy({
        where : {id:id}
    })
    .then(()=>{
        res.status(200).send("1 Rows vehicle Deleted")
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