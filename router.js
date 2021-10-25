const shorten = require('./controllers/shorten.controller')

const appRoutes = [
    { path: '/shorten', controller: shorten },
]

module.exports = appRoutes
