var isRegexp = require( './../lib' );

console.log( isRegexp( /\.+/ ) );
// Returns true

console.log( isRegexp( '/\.+/' ) );
// Returns false