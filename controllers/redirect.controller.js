const express = require('express')
const router = express.Router()

const MongooseSchemas = require('../models')
const { URLModel } = MongooseSchemas

router.get('/test', (_, res) => res.json({ msg: 'API is working' }))

router.get('/', (req, res) => {
    const hash = req.headers.hash

    URLModel.findOne({ _id: hash })
        .then(doc => {
            return res.json({
                url: doc.originalUrl,
                status: 200,
                statusText: 'OK'
            })
        })
        .catch(err => {
            console.error(err)
            return res.status(404).json({
                errorMsg: 'Sorry, this link may have expired.',
                status: 404,
                statusText: 'Not Found'
            })
        })
})

module.exports = router
