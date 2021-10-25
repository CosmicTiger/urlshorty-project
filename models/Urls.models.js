const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * @author CosmicTiger | Luisangel Marcia
 */
const URLSchema = new Schema({
    _id: {
        type: String,
    },
    originalUrl: {
        type: String,
        required: true,
    },
    hashedShortenUrl: {
        type: String,
    },
    visits: {
        type: Number,
        required: true,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('URL', URLSchema)
