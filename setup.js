var express       = require( 'express' ),
    path          = require( 'path' ),
    favicon       = require( 'serve-favicon' ),
    logger        = require( 'morgan' ),
    cookieParser  = require( 'cookie-parser' ),
    bodyParser    = require( 'body-parser' ),
    http          = require( 'http'),
    app           = express()
    
var auth = require( './server/routes/auth' )
var reports = require( './server/routes/reports' )

app.use( '/auth/', auth );
app.use( '/reports/', reports );

module.exports = app