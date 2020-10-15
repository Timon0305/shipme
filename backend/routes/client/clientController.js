const express = require('express');
const xlsxFile = require('read-excel-file/node');
const router = express.Router();

const Sender = require('../../models/Sender');
const Receiver = require('../../models/Receiver');
const Payment = require('../../models/Payments');

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
    Receiver.create(req.body, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data)
        }
    })

});

router.post('/getDocumentPrice', async (req, res) => {
    const {exportCountry, importCountry, service} = req.body;
    if (exportCountry === 'Indonesia' && service === 'express') {
        req.body.sheet = 1;
    } else if (exportCountry === 'Indonesia' && service !== 'express') {
        req.body.sheet = 3;
    } else if (exportCountry !== 'Indonesia' && service === 'express') {
        req.body.sheet = 2;
    } else {
        req.body.sheet = 4;
    }

    let weights = [];
    let quantities = [];
    for (let i = 0; i <= 3; i++) {
        let key = 'weight';
        let item = 'quantity';
        if (i > 0) {
            key = key + i;
            item = item + i;
        }
        let weight = parseFloat(req.body[key]);
        let quantity = parseFloat(req.body[item]);
        if (weight > 0) {
            weights.push(weight);
        } else {
            break;
        }
        if (quantity > 0) {
            quantities.push(quantity)
        } else {
            break;
        }
    }
    let country;
    let data = [];
    let total = 0;
    for (let index = 0; index < weights.length; index ++) {
        let weight = weights[index];
        let quantity = quantities[index];
        let price = 0;
        let rows = await xlsxFile('./file/shipme.xlsx', {sheet: req.body.sheet});
        {
            country = exportCountry !== 'Indonesia' ? exportCountry : importCountry;
            let gotResult = false;
            for (let i in rows) {
                if (gotResult) {
                    break;
                }
                for (let j in rows[i]) {
                    if (gotResult)
                        break;

                    if (rows[1][j] === country) {
                        for (i = 3; i < 8; i++) {
                            if (rows[i][0] === parseFloat(weight)) {
                                price = rows[i][j];
                                data.push(price);
                                gotResult = true;
                                break;
                            }
                        }
                    }
                }
            }

        }

        total += price * quantity;
    }
    res.json(total)
});

router.post('/saveDocumentShip', (req, res, next) => {
    Payment.create(req.body, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data)
        }
    });
});

module.exports = router;
