const jwt      = require('express-jwt')
const jwksRsa  = require('jwks-rsa');

module.exports = ({jwks, algs = "RS256"}) => jwt({ 
  secret : jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: jwks
  }), 
  algorithms: algs 
})
