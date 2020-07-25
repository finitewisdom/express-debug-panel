const 
    assert = require( "assert" ),
    debugPanel = require( "../index.js" ),
    debugPanelOptions = {
        "request": {
            "display": false
        },
        "response": {
            "display": false
        },
        "headers": {
            "display": false
        },
        "query": {
            "display": false
        },
        "params": {
            "display": false
        },
        "cookies": {
            "display": false
        },
        "app": {
            "display": false
        },
        "session": {
            "display": false
        }
    };

describe( "Express Debug Panel", function() {
    describe( "Suppress everything except `process`", function() {

        it( "should contain `" + process.versions.v8 + "`", done => {
            debugPanel.render( {}, debugPanelOptions, ( err, html ) => {
                try {
                    assert.ifError( err );
                    assert.ok( String( html ).includes( ">" + process.versions.v8 + "<" ) );
                    done();
                } catch ( err1 ) {
                    done( err1 );
                }
            } );
        } );
        
        it( "should contain `" + process.arch + "`", done => {
            debugPanel.render( {}, debugPanelOptions, ( err, html ) => {
                try {
                    assert.ifError( err );
                    assert.ok( String( html ).includes( ">" + process.arch + "<" ) );
                    done();
                } catch ( err1 ) {
                    done( err1 );
                }
            } );
        } );
        
        it( "should contain `" + process.env.TMPDIR + "`", done => {
            debugPanel.render( {}, debugPanelOptions, ( err, html ) => {
                try {
                    assert.ifError( err );
                    assert.ok( String( html ).includes( ">" + process.env.TMPDIR + "<" ) );
                    done();
                } catch ( err1 ) {
                    done( err1 );
                }
            } );
        } );
        
    } );
} );
