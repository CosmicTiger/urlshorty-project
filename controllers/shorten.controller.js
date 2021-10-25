const express = require('express')
const router = express.Router()
const uniqid = require('uniqid')

// URL Model
const MongooseSchemas = require('../models')

const { URLModel } = MongooseSchemas

// Test API
router.get('/test', (req, res) => res.json({ msg: 'Shorten API is working' }))

router.post('/', (req, res) => {
    const urlData = req.body.url

    if (!req.body.url) {
        return res.status(400).json({ error: 'url is required' })
    }

    console.log('URL is: ', urlData)

    URLModel.findOne({ url: urlData }, (err, doc) => {
        if (doc) {
            console.log('Entry found in the Database')
        } else {
            console.log('This is a new URL')
        }
    })

    return res.status(200).json({ msg: urlData })
})

module.exports = router
