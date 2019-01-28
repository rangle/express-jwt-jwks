# express-jwt-jwks
Simple JWT auth using JWKS key sets for Express.  Wraps express-jwt and jwks-rsa.  AWS Cognito compatible.


## Install

    $ npm install express-jwt-jwks

## Usage

The JWT authentication middleware authenticates callers using a JWT.
If the token is valid, `req.user` will be set with the JSON object decoded
to be used by later middleware for authorization and access control.

```javascript

// Obtain JWT auth middleware, using a remote JWKS key set
var SECURE = require('express-jwt-jwks')({
    jwks : "https://.../.wellknown/jwks.json"
});


// Add middleware to a route to protect it
app.get("/protected", SECURE, (req, res, next) => {
    res.status(200).send("Success!")
})

```
