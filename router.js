const shorten = require('./controllers/shorten.controller')
const redirect = require('./controllers/redirect.controller')

const appRoutes = [
    { path: '/shorten', controller: shorten },
    { path: '/redirect', controller: redirect },
]

module.exports = appRoutes
