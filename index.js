"use strict";

const
    path = require( "path" ),
    ejs = require( "ejs" ),
    template = path.join( __dirname, "debug.ejs" );

function render( req, callback ) {
    return new Promise( ( resolve, reject ) => {
        if ( !req ) {
            reject( "Specify a request object" );
            return callback( "Specify a request object" );
        } else if ( typeof req !== "object" ) {
            reject( "Request is not an object" );
            return callback( "Request is not an object" );
        } else {
            ejs.renderFile( template, { "req": req }, null, function( err, str ) {
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
