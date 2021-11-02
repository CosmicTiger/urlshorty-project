const shorten = require('./controllers/shorten.controller')
const redirect = require('./controllers/redirect.controller')

const appRoutes = [
    { path: '/redirect', controller: redirect },
    { path: '/shorten', controller: shorten },
]

module.exports = appRoutes
