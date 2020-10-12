const express = require('express');
const router = express.Router();

const Sender = require('../../models/Sender');
const Receiver = require('../../models/Receiver');

router.post('/sender', (req, res, next) => {
    Sender.create(req.body, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data)
        }
    })
});

router.post('/receiver', (req, res, next) => {
    const senderId = req.body.sender_id;
    if (!senderId) {
        console.log('asd')
        Receiver.create(req.body, (err, data) => {
            if (err) {
                return next(err)
            } else {
                res.json(data)
            }
        })
    } else {
        Receiver.findOneAndUpdate({sender_id: senderId}, {$set: req.body}, (err, data) => {
            if (err) {
                return next(err)
            } else {
                res.json(data)
            }
        })
    }

});

module.exports = router;
