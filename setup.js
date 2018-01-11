var express       = require( 'express' ),
    path          = require( 'path' ),
    favicon       = require( 'serve-favicon' ),
    logger        = require( 'morgan' ),
    cookieParser  = require( 'cookie-parser' ),
    bodyParser    = require( 'body-parser' ),
    http          = require( 'http'),
    app           = express()
    
var auth = require( './server/routes/auth' )

app.use( '/auth/', auth );

module.exports = app