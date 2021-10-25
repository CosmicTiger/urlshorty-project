if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// Imports all envs
const {
    EXPRESS_API_PORT,
} = process.env

const vars = {
    EXPRESS_API_PORT,
    PRODUCTION: process.env.NODE_ENV === 'production',
}

module.exports = vars
