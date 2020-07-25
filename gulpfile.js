const
    autoprefixer = require( "gulp-autoprefixer" ),
    clean = require( "gulp-clean" ),
    eslint = require( "gulp-eslint" ),
    fs = require( "fs" ),
    gulp = require( "gulp" ),
    htmllint = require( "htmllint" ),
    htmlvalidator = require( "gulp-w3c-html-validator" ),
    jsonlint = require( "gulp-jsonlint" ),
    logger = require( "gulplog" ),
    rename = require( "gulp-rename" ),
    replace = require( "gulp-replace" ),
    sass = require( "gulp-sass" ),
    sasslint = require( "gulp-sass-lint" ),
    tap = require( "gulp-tap" ),

    paths = {
        "lint": {
            "html": [ "./*.ejs" ],
            "json": [ "./package.json" ],
            "scss": [ "./*.scss" ],
            "js": {
                "client": [],
                "server": [ "./*.js", "./test/*.js" ]            
            }
        },
        "compile": {
            "scss": {
                "input": [ "./*.scss" ],
                "output": "./"
            }
        },
        "temp": "./temp/"
    };

function doClean() {

    var input,
        stream;

    console.log( "========== clean ================================================" );

    input = [ paths.temp ];

    stream = gulp.src( input, { "allowEmpty": true } )
        .pipe( clean() );

    return stream;
}

function doCopyForHtmlValidator() {

    var input,
        stream;

    console.log( "========== copy-for-html-validator ================================================" );

    input = paths.lint.html;

    stream = gulp.src( input )
        .pipe( replace( /\<\!\-\- htmllint ignore \-\-\>[\s\S]+?\<\!\-\- htmllint unignore \-\-\>/g, "" ) )     //  strip: <!-- htmllint ignore --> through <!-- htmllint unignore -->
        .pipe( replace( / colspan="\<\%[^]*?\%\>"/g, ' colspan="1"' ) )                                         //  replace: ` colspan="<% xxx %>"` with ` colspan="1"`
        .pipe( replace( /\<\%[^]*?\%\>/g, "" ) )                                                                //  replace: `<% xxx %>` with ``
        .pipe( rename( { "extname": ".html" } ) )
        .pipe( gulp.dest( paths.temp + "html/" ) );

    return stream;
}

function doHtmlValidator() {

    var input,
        stream;

    function shouldAllowMessage( type, message ) {

        var allow = true;

        if ( /Bad character “%” after “<”/.test( message )
          || /The character encoding was not declared./.test( message )
          || /Non-space characters found without seeing a doctype first/.test( message )
          || /Element “head” is missing a required instance of child element “title”/.test( message )
          || /Consider adding a “lang” attribute to the “html” start tag/.test( message )
          || /This document appears to be written in English/.test( message )
          || /Start tag seen without seeing a doctype first/.test( message )
          || /Empty heading/.test( message )
        ) {
            allow = false;
        }

        return allow;
    }

    console.log( "========== html-validator ================================================" );

    input = paths.temp + "html/*.html";

    stream = gulp.src( input )
        .pipe( htmlvalidator( { "verifyMessage": shouldAllowMessage } ) )
        .pipe( htmlvalidator.reporter() );

    return stream;
}

function doJsonLint() {

    var input,
        stream;

    console.log( "========== json-lint ================================================" );

    input = paths.lint.json;

    stream = gulp.src( input )
        .pipe( jsonlint() )
        .pipe( jsonlint.reporter() )
        .pipe( jsonlint.failOnError() );

    return stream; 
}

function doHtmlLint() {

    var input,
        stream;

    logger.info( "========== html-lint ================================================" );

    input = paths.lint.html;

    stream = gulp.src( input )
        .pipe( tap( function( file /* , t */ ) {

            var output = htmllint( fs.readFileSync( file.path, "utf8" ), {
                "raw-ignore-regex": "/\<\%[^]*?\%\>|\<\!-- htmllint ignore --\>[^]*?\<\!-- htmllint unignore --\>/",
                "line-end-style": "crlf",
                "line-no-trailing-whitespace": false,
                "id-class-style": "/^[a-z0-9\-_]*$/",
                "tag-bans": [ "style" ]
            } );

            output.then( function( errors ) { 
                if ( errors.length > 0 ) {
                    logger.error( "---------------------------------------------------------------------------------------------------" );
                    logger.error( file.path );
                    logger.error( "---------------------------------------------------------------------------------------------------" );
                    errors.forEach( function( error ) {
                        logger.error( ` ${ String( error.line ).padStart( 5, " " ) }/${ String( error.column ).padStart( 3, " " ) } (${ error.code }): ${ error.rule } (${ JSON.stringify( error.data ) })` );
                    } );
                }
            } );
        } ) );

    return stream;    
}

function doSassLint() {

    var input,
        stream;

    logger.info( "========== sass-lint ================================================" );

    input = paths.lint.scss;

    stream = gulp.src( input )
        .pipe( sasslint( {
            "rules": {
                "attribute-quotes": 2,
                "border-zero": 0,
                "clean-import-paths": 2,
                "indentation": [ 2, { "size": 4 } ],
                "leading-zero": 0,
                "nesting-depth": 0,
                "no-color-literals": 0,
                "no-ids": 0,
                "no-qualifying-elements": 0,
                "no-vendor-prefixes": 0,
                "property-sort-order": 0,
                "pseudo-element": 2,
                "quotes": [ 2, { "style": "double" } ]

                // "empty-line-between-blocks": 0,
                // "final-newline": 0,
                // "force-attribute-nesting": 0,
                // "force-element-nesting": 0,
                // "force-pseudo-nesting": 0,
                // "no-color-keywords": 0,
                // "no-important": 0,
                // "no-mergeable-selectors": 0,
                // "no-trailing-whitespace": 0,
                // "no-transition-all": 0,
                // "no-url-domains": 0,
                // "no-url-protocols": 0,
                // "shorthand-values": 0,
                // "single-line-per-selector": 0,
            }
        } ) )
        .pipe( sasslint.format() )
        .pipe( sasslint.failOnError() );

    return stream;
}

function doEsLintClient() {     //  eslint-disable-line no-unused-vars

    var input,
        stream;
    
    logger.info( "========== eslint-client ================================================" );

    input = paths.lint.js.client;

    stream = gulp.src( input )
        .pipe( eslint( {
            "envs": [ "browser" ],
            "globals": [ "$" ]
        } ) )
        .pipe( eslint.format() )
        .pipe( eslint.failAfterError() );

    return stream;
}

function doEsLintServer() {

    var input,
        stream;
    
    logger.info( "========== eslint-server ================================================" );

    input = paths.lint.js.server;

    stream = gulp.src( input )
        .pipe( eslint( {
            "envs": [ "node", "es6" ],
            "globals": [ "describe", "it" ]
        } ) )
        .pipe( eslint.format() )
        .pipe( eslint.failAfterError() );

    return stream;  
}

function doSass() {

    var input,
        output,
        stream;

    logger.info( "========== css ================================================" );

    input = paths.compile.scss.input;
    output = paths.compile.scss.output;

    stream = gulp.src( input )
        .pipe( sass() )
        .pipe( autoprefixer( { "overrideBrowserslist": [ "last 2 versions" ] } ) )
        .pipe( gulp.dest( output ) )
        .pipe( gulp.dest( output ) );

    return stream;
}

function getValidateHtmlSeries() {
    return gulp.series( doCopyForHtmlValidator, doHtmlValidator );
}

/* eslint-disable dot-notation */
exports[ "sass" ] = gulp.series( doSass );                                    
exports[ "lint-es" ] = gulp.series( doEsLintServer );
exports[ "lint-sass" ] = gulp.series( doSassLint );
exports[ "lint-html" ] = gulp.series( doHtmlLint );
exports[ "lint-json" ] = gulp.series( doJsonLint );
exports[ "validate-html" ] = gulp.series( doClean, getValidateHtmlSeries() );
exports[ "lint" ] = gulp.series( doClean, doJsonLint, doHtmlLint, doSassLint, doEsLintServer, getValidateHtmlSeries() );
exports[ "default" ] = gulp.series( doClean, doJsonLint, doHtmlLint, doSassLint, doEsLintServer, getValidateHtmlSeries(), doSass );
/* eslint-enable dot-notation */

