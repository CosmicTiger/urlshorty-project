if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// Imports all envs
const {
    API_VERSION,
    EXPRESS_API_PORT,
    MONGO_URI,
} = process.env

const vars = {
    API_VERSION,
    EXPRESS_API_PORT,
    MONGO_URI,
    PRODUCTION: process.env.NODE_ENV === 'production',
}

module.exports = vars
