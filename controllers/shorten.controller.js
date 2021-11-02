const express = require('express')
const router = express.Router()
const uniqid = require('uniqid')

// URL Model
const MongooseSchemas = require('../models')

const { URLModel } = MongooseSchemas

// Test API
router.get('/test', (_, res) => res.json({ msg: 'Shorten API is working' }))

router.post('/', (req, res) => {
    const urlData = req.body.url

    if (!urlData) {
        return res.status(400).send({
            errorMsg: 'URL is required',
            statusText: 'Bad Request'
        })
    }

    URLModel.findOne({ originalUrl: urlData }, (_, doc) => {
        if (doc) {
            res.send({
                url: doc.originalUrl,
                hash: doc._id,
                status: 200,
                statusText: 'OK'
            })
        } else {
            const webAddress = new URLModel({
                _id: uniqid(),
                originalUrl: urlData,
            })

            webAddress.save((err) => {
                if (err) {
                    res.send({
                        errorMsg: 'Error saving the shortened url for this web address. Try again',
                        status: 404,
                        statusText: 'Not Found',
                    })
                }

                res.send({
                    url: urlData,
                    hash: webAddress._id,
                    status: 200,
                    statusText: 'OK',
                })
            })
        }
    })
})

module.exports = router
