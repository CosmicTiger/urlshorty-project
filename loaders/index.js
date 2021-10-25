const ExpressLoader = require('./express.loader')
const MongooseLoader = require('./mongoose.loader')

const AppLoaderInitialization = async ({
    expressApp = null,
    expressRoutes = null,
    mongooseInstance = null,
}) => {
    await ExpressLoader(expressApp, expressRoutes)
    await MongooseLoader(mongooseInstance)
}

module.exports = {
    AppLoaderInitialization,
}
