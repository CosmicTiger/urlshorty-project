'use strict'

const { EXPRESS_API_PORT } = require('./configuration/vars.config')
const { app, server, NOW } = require('./configuration/constants.config')

const loaders = require('./loaders')
const appRoutes = require('./router')

async function StartServer() {
    await loaders.AppLoaderInitialization({
        expressApp: app,
        expressRoutes: appRoutes,
    })

    server.listen(EXPRESS_API_PORT, () => {
        console.info(`${NOW()} | Server is running on port ${EXPRESS_API_PORT}`)
    })
}

StartServer()
