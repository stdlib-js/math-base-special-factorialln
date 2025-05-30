/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var factorial = require( '@stdlib/math-base-special-factorial' );
var incrspace = require( '@stdlib/array-base-incrspace' );
var abs = require( '@stdlib/math-base-special-abs' );
var ln = require( '@stdlib/math-base-special-ln' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var tryRequire = require( '@stdlib/utils-try-require' );


// FIXTURES //

var veryLargePositive = require( './fixtures/julia/very_large_positive.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );


// VARIABLES //

var factorialln = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( factorialln instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factorialln, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative integer, the function returns `NaN`', opts, function test( t ) {
	var values;
	var v;
	var i;

	values = incrspace( -1.0, -500.0, -1.0 );
	for ( i = 0; i < values.length; i++ ) {
		v = factorialln( values[ i ] );
		t.strictEqual( isnan( v ), true, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'if provided negative infinity, the function returns `NaN`', opts, function test( t ) {
	var v = factorialln( NINF );
	t.strictEqual( isnan( v ), true, 'returns expected value when provided negative infinity' );
	t.end();
});

tape( 'if provided positive infinity, the function returns `+infinity`', opts, function test( t ) {
	var v = factorialln( PINF );
	t.ok( v, PINF, 'returns +infinity when provided +infinity' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = factorialln( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value when provided a NaN' );
	t.end();
});

tape( 'the function evaluates the natural logarithm of the factorial of `x` (very large positive integers)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = veryLargePositive.expected;
	x = veryLargePositive.x;

	for ( i = 0; i < x.length; i++ ) {
		y = factorialln( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of the factorial of `x` (large positive integers)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = largePositive.expected;
	x = largePositive.x;

	for ( i = 0; i < x.length; i++ ) {
		y = factorialln( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of the factorial of `x` (medium positive values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = factorialln( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );

			// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2774#discussion_r1712904184
			tol = 1.5 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of the factorial of `x` (small positive values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smallPositive.expected;
	x = smallPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = factorialln( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a value almost equal to `ln( factorial( x )` for `x` in `[0,171]', opts, function test( t ) {
	var expected;
	var values;
	var delta;
	var tol;
	var v;
	var i;

	values = incrspace( 0.0, 171.0, 0.5 );
	for ( i = 0; i < values.length; i++ ) {
		v = factorialln( values[ i ] );
		expected = ln( factorial( values[ i ] ) );
		delta = abs( v - expected );
		tol = 4.0 * EPS * abs( expected );
		t.ok( delta <= tol, 'within tolerance. x: ' + values[ i ] + '. Value: ' + v + '. Expected: ' + expected + '. Tolerance: ' + tol + '. Delta: ' + delta + '.' );
	}
	t.end();
});
