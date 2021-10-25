const { morganDeployment } = require('../configuration/constants.config')
const { urlencoded, json } = require('express')

/**
 * @author CosmicTiger | Luisangel Marcia
 * @description A loader function to configure the express server
 * @param {Express} app - The express server instance from library
 * @param {Array<Object>} routes - Array of available routes in this application
 */
const ExpressLoader = async (app, routes = []) => {
    if (!app || !Array.isArray(routes))
        return

    // Configure middlewares for express server
    app.use(json())
    app.use(urlencoded({ extended: true }))
    morganDeployment()

    // Configure routes for express server since root is '/'
    app.get('/', (req, res) => res.send('Hello World!'))

    return app
}

module.exports = ExpressLoader
