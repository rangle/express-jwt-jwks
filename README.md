# express-jwt-jwks
Simple JWT auth using JWKS key sets for Express.  Wraps express-jwt and jwks-rsa.  AWS Cognito compatible.

Calls to JWKS are cached, and JWKS entries are associated to a JWT through the "kid" parameter in the JWT header.  Calls through the cache to the remote JWKS are rate limited to 5 req/min.

## Install

    $ npm install express-jwt-jwks

## Usage

The JWT authentication middleware authenticates callers using a JWT.
If the token is valid, `req.user` will be set with the JSON object decoded
to be used by later middleware for authorization and access control.

```javascript



// Obtain JWT auth middleware, using a remote JWKS key set
var SECURE = require('express-jwt-jwks')({
    jwks : "https://....../.well-known/jwks.json"
});


// Express routes, the first is JWT secured, the second is open.

router.get('/restricted', SECURE, (_, res) => {
  res.send("Super secret data")
})

router.get('/open', (_, res) => {
  res.send("Anyone is allowed to see this")
})



```
