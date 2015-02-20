/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isRegexp = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-regexp', function tests() {

	it( 'should export a function', function test() {
		expect( isRegexp ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isRegexp( /\.+/ ) );
		assert.ok( isRegexp( new RegExp( '\.+' ) ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			[],
			'5',
			'/\.+/',
			function(){},
			null,
			NaN,
			{},
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isRegexp( values[i] ) );
		}
	});

});
