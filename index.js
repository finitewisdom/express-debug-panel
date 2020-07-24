"use strict";

const
    config = require( "config" ),
    ejs = require( "ejs" ),
    path = require( "path" ),
    template = path.join( __dirname, "debug.ejs" );

function render( req, options, callback ) {

    const defaultOptions = {
        "request": {
            "object": req,
            "maxDepth": 2,
            "display": true
        },
        "response": {
            "object": req.res,
            "maxDepth": 2,
            "display": true
        },
        "headers": {
            "object": req.headers,
            "maxDepth": 1,
            "display": true
        },
        "query": {
            "object": req.query,
            "maxDepth": 1,
            "display": true
        },
        "params": {
            "object": req.params,
            "maxDepth": 1,
            "display": true
        },
        "cookies": {
            "object": req.cookies,
            "maxDepth": 1,
            "display": true
        },
        "process": {
            "object": process,
            "maxDepth": 3,
            "display": true
        },
        "app": {
            "object": req.app,
            "maxDepth": 4,
            "display": true
        },
        "session": {
            "object": req.session,
            "maxDepth": 3,
            "display": true
        }
    };

    var myOptions = config.util.extendDeep( defaultOptions, options || {} );

    return new Promise( ( resolve, reject ) => {
        if ( !req ) {
            reject( "Specify a request object" );
            return callback( "Specify a request object" );
        } else if ( typeof req !== "object" ) {
            reject( "Request is not an object" );
            return callback( "Request is not an object" );
        } else {
            ejs.renderFile( template, { "options": myOptions }, null, function( err, str ) {
                if ( err ) {
                    reject( "Error: " + err.name + " - " + err.message );
                    callback( "Error: " + err.name + " - " + err.message );
                    return;
                } else {
                    resolve( str );
                    callback( null, str );
                    return;
                }
            } );
        }
    } );
}

var ExpressDebugPanel = function () {
    this.render = render;
}

module.exports = new ExpressDebugPanel();
