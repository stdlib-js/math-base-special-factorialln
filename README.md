<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# factorialln

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Natural logarithm of the [factorial function][factorial-function].

<section class="intro">

The natural logarithm of the factorial function may be expressed

<!-- <equation class="equation" label="eq:factorialln_function" align="center" raw="f(n)=\ln (n!)" alt="Equation of the natural logarithm of the factorial."> -->

```math
f(n)=\ln (n!)
```

<!-- <div class="equation" align="center" data-raw-text="f(n)=\ln (n!)" data-equation="eq:factorialln_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorialln/docs/img/equation_factorialln_function.svg" alt="Equation of the natural logarithm of the factorial.">
    <br>
</div> -->

<!-- </equation> -->

The [factorial function][factorial-function] may be defined as the product

<!-- <equation class="equation" label="eq:factorial_function" align="center" raw="n! = \prod_{k=1}^n k" alt="Factorial function definition"> -->

```math
n! = \prod_{k=1}^n k
```

<!-- <div class="equation" align="center" data-raw-text="n! = \prod_{k=1}^n k" data-equation="eq:factorial_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorialln/docs/img/equation_factorial_function.svg" alt="Factorial function definition">
    <br>
</div> -->

<!-- </equation> -->

or according to the recurrence relation

<!-- <equation class="equation" label="eq:factorial_recurrence_relation" align="center" raw="n! = \begin{cases}1 & \textrm{if } n = 0,\\(n-1)! \times n & \textrm{if } n > 1\end{cases}" alt="Factorial function recurrence relation"> -->

```math
n! = \begin{cases}1 & \textrm{if } n = 0,\\(n-1)! \times n & \textrm{if } n > 1\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="n! = \begin{cases}1 &amp; \textrm{if } n = 0,\\(n-1)! \times n &amp; \textrm{if } n &gt; 1\end{cases}" data-equation="eq:factorial_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorialln/docs/img/equation_factorial_recurrence_relation.svg" alt="Factorial function recurrence relation">
    <br>
</div> -->

<!-- </equation> -->

Following the convention for an [empty product][empty-product], in all definitions,

<!-- <equation class="equation" label="eq:zero_factorial" align="center" raw="0! = 1" alt="Zero factorial"> -->

```math
0! = 1
```

<!-- <div class="equation" align="center" data-raw-text="0! = 1" data-equation="eq:zero_factorial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorialln/docs/img/equation_zero_factorial.svg" alt="Zero factorial">
    <br>
</div> -->

<!-- </equation> -->

The [Gamma][gamma-function] function extends the [factorial function][factorial-function] for non-integer values.

<!-- <equation class="equation" label="eq:factorial_function_and_gamma" align="center" raw="n! = \Gamma(n+1)" alt="Factorial function extension via the Gamma function"> -->

```math
n! = \Gamma(n+1)
```

<!-- <div class="equation" align="center" data-raw-text="n! = \Gamma(n+1)" data-equation="eq:factorial_function_and_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorialln/docs/img/equation_factorial_function_and_gamma.svg" alt="Factorial function extension via the Gamma function">
    <br>
</div> -->

<!-- </equation> -->

The [factorial][factorial-function] of a **negative** integer is not defined.

Evaluating the natural logarithm of [factorial function][factorial-function] is useful as the [factorial function][factorial-function] can overflow for large `n`. Thus, `factorialln( n )` is generally preferred to `ln( n! )`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-factorialln
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var factorialln = require( '@stdlib/math-base-special-factorialln' );
```

#### factorialln( x )

Evaluates the natural logarithm of the [factorial function][factorial-function]. For input values other than negative integers, the function returns `ln( x! ) = ln( Γ(x+1) )`, where `Γ` is the [Gamma][gamma-function] function. For negative integers, the function returns `NaN`.

```javascript
var v = factorialln( 3.0 );
// returns ~1.792

v = factorialln( 2.4 );
// returns ~1.092

v = factorialln( -1.0 );
// returns NaN

v = factorialln( -1.5 );
// returns ~1.266
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = factorialln( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/array-base-incrspace' );
var factorialln = require( '@stdlib/math-base-special-factorialln' );

var x = incrspace( -10.0, 50.0, 0.5 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, f(x): %d', x[ i ], factorialln( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/factorialln.h"
```

#### stdlib_base_factorialln( x )

Evaluates the natural logarithm of the [factorial function][factorial-function]. For input values other than negative integers, the function returns `ln( x! ) = ln( Γ(x+1) )`, where `Γ` is the [Gamma][gamma-function] function. For negative integers, the function returns `NaN`.

```c
double out = stdlib_base_factorialln( 3.0 );
// returns ~1.792

out = stdlib_base_factorialln( -1.5 );
// returns ~1.266
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_factorialln( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/factorialln.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 2.0, 3.0, 5.0, 8.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_factorialln( x[ i ] );
        printf( "factorialln(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/factorial`][@stdlib/math/base/special/factorial]</span><span class="delimiter">: </span><span class="description">evaluate a factorial.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-factorialln.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-factorialln

[test-image]: https://github.com/stdlib-js/math-base-special-factorialln/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-factorialln/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-factorialln/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-factorialln?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-factorialln.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-factorialln/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-factorialln/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-factorialln/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-factorialln/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-factorialln/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-factorialln/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-factorialln/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-factorialln/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-factorialln/main/LICENSE

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_Function

[factorial-function]: https://en.wikipedia.org/wiki/Factorial

[empty-product]: https://en.wikipedia.org/wiki/Empty_product

<!-- <related-links> -->

[@stdlib/math/base/special/factorial]: https://github.com/stdlib-js/math-base-special-factorial

<!-- </related-links> -->

</section>

<!-- /.links -->
