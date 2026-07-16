/** @license Apache-2.0 */

'use strict';

/**
* Return the loss function string associated with a supported SGD classification loss function value.
*
* @module @stdlib/ml-base-sgd-classification-loss-function-resolve-str
*
* @example
* var str2enum = require( '@stdlib/ml-base-sgd-classification-loss-function-str2enum' );
* var resolve = require( '@stdlib/ml-base-sgd-classification-loss-function-resolve-str' );
*
* var v = resolve( str2enum( 'hinge' ) );
* // returns 'hinge'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
