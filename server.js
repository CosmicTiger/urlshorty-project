'use strict'

const { EXPRESS_API_PORT } = require('./config/vars.config')
const { app, server, NOW } = require('./config/constants.config')
const db = require('./config/db.config')

const loaders = require('./loaders')
const appRoutes = require('./router')

async function StartServer() {
    await loaders.AppLoaderInitialization({
        expressApp: app,
        expressRoutes: appRoutes,
        mongooseInstance: db,
    })

    server.listen(EXPRESS_API_PORT, () => {
        console.info(`${NOW()} | Server is running on port ${EXPRESS_API_PORT}`)
    })
}

StartServer()
