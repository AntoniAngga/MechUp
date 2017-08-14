const db = require('../models');

let create_post = (req,res) => {
    let data = req.body;
    db.order.create({
        id_customer: data.id_customer,
        id_mechanic: data.id_mechanic,
        id_vehicle: data.id_vehicle,
        status: data.status,
        location: data.location,
        lat_cust: data.lat_cust,
        long_cust: data.long_cust,
        lat_mech: data.lat_mech,
        long_mech: data.long_mech
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
    db.sequelize.query(`select "customers"."id" as "cust_id", "customers"."name" as "cust_name", "customers"."gender" as "cust_gender", "customers"."email" as "cust_email", "customers"."address" as "cust_address", "customers"."phone_number" as "cust_phone_number","mechanics"."id" as "mech_id","mechanics"."name" as "mech_name", "mechanics"."gender" as "mech_gender", "mechanics"."phone_number" as "mech_phone_number", "vehicles"."id", "vehicles"."type","vehicles"."merek","vehicles"."tahun" ,"orders"."id" as "order_id", "orders"."status" as "order_status", "orders"."lat_cust", "orders"."long_cust", "orders"."lat_mech", "orders"."long_mech" from "orders"
    inner join "customers" on "customers"."id" = "orders"."id_customer"
    LEFT join "mechanics" on "mechanics"."id" = "orders"."id_mechanic"
    LEFT join "vehicles" on "vehicles"."id" = "orders"."id_vehicle"
    where "orders"."id" = ${id}
    `)
    .then(data => {
        res.status(200).send(data[0])
    })
    .catch(err => {
        res.status(401).send(err)
    })
}

let findall_get = (req,res) => {
    db.sequelize.query(`select "customers"."id" as "cust_id", "customers"."name" as "cust_name", "customers"."gender" as "cust_gender", "customers"."email" as "cust_email", "customers"."address" as "cust_address", "customers"."phone_number" as "cust_phone_number","mechanics"."id" as "mech_id","mechanics"."name" as "mech_name", "mechanics"."gender" as "mech_gender", "mechanics"."phone_number" as "mech_phone_number", "vehicles"."id", "vehicles"."type","vehicles"."merek","vehicles"."tahun" ,"orders"."id" as "order_id", "orders"."status" as "order_status", "orders"."lat_cust", "orders"."long_cust", "orders"."lat_mech", "orders"."long_mech" from "orders"
    inner join "customers" on "customers"."id" = "orders"."id_customer"
    LEFT join "mechanics" on "mechanics"."id" = "orders"."id_mechanic"
    LEFT join "vehicles" on "vehicles"."id" = "orders"."id_vehicle"
    `)
    .then(data => {
        res.status(200).send(data[0])
    })
    .catch(err => {
        res.status(401).send(err)
    })
}

let edit_put = (req,res) => {
    let id = req.params.id;
    let data = req.body;
    db.order.update({
        id_customer: data.id_customer,
        id_mechanic: data.id_mechanic,
        id_vehicle: data.id_vehicle,
        status: data.status,
        location: data.location,
        lat_cust: data.lat_cust,
        long_cust: data.long_cust,
        lat_mech: data.lat_mech,
        long_mech: data.long_mech
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
    db.order.destroy({
        where : {id:id}
    })
    .then(()=>{
        res.status(200).send("1 Rows order Deleted")
    })
    .catch(err => {
        console.log(err)
    })
}

let get_by_id_mechanic = (req,res) => {
    let id = req.params.id;
    db.order.findAll({
        where: {id_mechanic: id}
    })
    .then((data) => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}


module.exports = {
    create_post,
    findall_get,
    findbyid_get,
    edit_put,
    destory_delete,
    get_by_id_mechanic
}