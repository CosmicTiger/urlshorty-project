const { morganDeployment } = require('../config/constants.config')
const { API_VERSION } = require('../config/vars.config')
const { urlencoded, json } = require('express')
const cors = require('cors')

const MongooseSchemas = require('../models')
const { URLModel } = MongooseSchemas

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
    app.use(cors())

    // Configure routes for express server since root is '/'
    const baseRootPath = `/api/${API_VERSION}`

    app.get(baseRootPath, (_, res) => res.send('Hello World!'))

    for (let route of routes) {
        const { path = null, controller = null } = route

        if (path && controller) {
            const baseRootPrefixing = baseRootPath + path
            app.use(baseRootPrefixing, controller)
        }
    }

    app.use(`${baseRootPath}/:hash`, (req, res) => {
        const id = req.params.hash

        URLModel.findOne({ _id: id }, (err, doc) => {
            if (!doc && err) {
                res.redirect('/')
            } else {
                const redirectUrl = 'http://' + doc.originalUrl
                const filteredId = { _id: id }
                const updateVisits = { visits: doc.visits + 1 }
                URLModel.findOneAndUpdate(filteredId, updateVisits, (err, doc) => {
                    if (!doc && err) {
                        console.err("The data hasn't updated")
                    }

                    console.info('The update was made')
                })
                res.redirect(redirectUrl)
            }
        })
    })

    return app
}

module.exports = ExpressLoader
