const mongoose = require('mongoose')

const { MONGO_URI } = require('./vars.config')

const MONGO_OPTIONS = Object.freeze({
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connect(MONGO_URI, MONGO_OPTIONS)
    .then(() => console.info('MongoDB Connected.'))
    .catch(err => console.error(err))

module.exports = db
