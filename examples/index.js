'use strict';

var isRegexp = require( './../lib' );

console.log( isRegexp( /\.+/ ) );
// returns true

console.log( isRegexp( '/\.+/' ) );
// returns false