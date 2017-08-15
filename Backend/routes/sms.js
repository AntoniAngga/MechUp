var express = require('express');
var router = express.Router();
var axios = require('axios');
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: "ccae4ea9",
    apiSecret: "01e3760ae2d0660b"
});

router.post('/', (req,res) => {
    let data = req.body
    axios.post('https://rest.nexmo.com/sms/json', {
        apiKey: "ccae4ea9",
        apiSecret: "01e3760ae2d0660b",
        to: data.to,
        from: "MechUp",
        text: data.text
    })
    .then(function (response) {
        res.status(200).send("sudah di kirim Sms nya");
    })
    .catch(function (error) {
        console.log(error);
    });
})

module.exports = router;