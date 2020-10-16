const express = require('express');
const router = express.Router();

const Sender = require('../../models/Sender');
const Receiver = require('../../models/Receiver');
const Payment = require('../../models/Payments');

router.get('/getList', (req, res) => {
    Sender.find()
        .then(async sender => {
            let data = [];
            for (let item of sender) {
                let rowData = {};
                rowData.sender = item;
                const sender_id = item._id;
                await Receiver.findOne({sender_id: sender_id}, (err, receiver) => {
                    rowData.receiver = receiver
                }) ;
                await Payment.findOne({sender_id: sender_id}, (err, payment) => {
                    rowData.data = payment
                });
                data.push(rowData);
            }
            res.json(data)
        })
});


module.exports = router;
