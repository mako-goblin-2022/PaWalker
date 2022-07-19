const { expressjwt: jwt } = require('express-jwt')
const jwks = require('jwks-rsa')

const domain = 'https://dev-7915gybq.au.auth0.com'
const audience = 'https://pawalker/api'

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLImit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

module.exports = checkJwt
