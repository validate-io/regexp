/**
*
*	VALIDATE: regexp
*
*
*	DESCRIPTION:
*		- Validates if a value is a regular expression.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// VARIABLES //

var toString = Object.prototype.toString;


// ISREGEXP //

/**
* FUNCTION: isRegexp( value )
*	Validates if a value is a regular expression.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is a regular expression
*/
function isRegexp( value ) {
	return toString.call( value ) === '[object RegExp]';
} // end FUNCTION isRegexp()


// EXPORTS //

module.exports = isRegexp;
