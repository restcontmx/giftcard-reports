var express       = require( 'express' ),
    path          = require( 'path' ),
    favicon       = require( 'serve-favicon' ),
    logger        = require( 'morgan' ),
    cookieParser  = require( 'cookie-parser' ),
    bodyParser    = require( 'body-parser' ),
    http          = require( 'http'),
    app           = express()
    
var auth = require( './server/routes/auth' )
var giftcards = require( './server/routes/giftcards' )

app.use( '/auth/', auth );
app.use( '/giftcards', giftcards );

module.exports = app