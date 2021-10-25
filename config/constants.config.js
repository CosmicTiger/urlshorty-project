// Imports
const express = require('express')
const http = require('http')
const morgan = require('morgan')
const dayjs = require('dayjs')

const { PRODUCTION } = require('./vars.config')

// App initialization
const app = express()
const server = http.createServer(app)

const morganDeployment = () => {
    if (!PRODUCTION) app.use(morgan('dev'))
}

/**
 * @author CosmicTiger | Luisangel Marcia
 * @description This function is a constant return value of
 * the specific time and date of the server.
 * @returns {Date}
 */
const NOW = () => {
    const now = new Date()

    /**
     * @type {Date}
     * @description This constant would return the
     * */
    const timeMinutesOffset = dayjs().toDate().getTimezoneOffset() * 2

    /**
     * @type {Date}
     * @summary This constants obtain the conversion of now to timestamp
     **/
    const timePast = dayjs(now).subtract(timeMinutesOffset, 'minute').toDate()

    return timePast
}

module.exports = {
    app,
    server,
    morganDeployment,
    NOW,
}
