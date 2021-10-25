const ExpressLoader = require('./express.loader')

const AppLoaderInitialization = async ({
    expressApp = null,
    expressRoutes = null,
}) => {
    await ExpressLoader(expressApp, expressRoutes)
}

module.exports = {
    AppLoaderInitialization,
}
