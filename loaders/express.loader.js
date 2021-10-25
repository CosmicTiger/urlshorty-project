const { morganDeployment } = require('../config/constants.config')
const { API_VERSION } = require('../config/vars.config')
const { urlencoded, json } = require('express')

const shorten = require('../controllers/shorten.controller')

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
    const baseRootPath = `/api/${API_VERSION}`
    app.get(baseRootPath, (_, res) => res.send('Hello World!'))

    app.use(`${baseRootPath}/shorten`, shorten)

    for (let route of routes) {
        const { path = null, controller = null } = route

        if (path && controller) {
            const baseRootPrefixing = baseRootPath + path
            app.use(baseRootPrefixing, controller)
        }
    }

    return app
}

module.exports = ExpressLoader
