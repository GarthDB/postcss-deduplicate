# PostCSS Deduplicate

[![Build Status](https://travis-ci.org/GarthDB/postcss-deduplicate.svg?branch=master)](https://travis-ci.org/GarthDB/postcss-deduplicate) [![Code Climate](https://codeclimate.com/github/GarthDB/postcss-deduplicate/badges/gpa.svg)](https://codeclimate.com/github/GarthDB/postcss-deduplicate) [![Test Coverage](https://codeclimate.com/github/GarthDB/postcss-deduplicate/badges/coverage.svg)](https://codeclimate.com/github/GarthDB/postcss-deduplicate/coverage) [![Issue Count](https://codeclimate.com/github/GarthDB/postcss-deduplicate/badges/issue_count.svg)](https://codeclimate.com/github/GarthDB/postcss-deduplicate/issues) [![Dependency Status](https://david-dm.org/GarthDB/postcss-deduplicate.svg)](https://david-dm.org/GarthDB/postcss-deduplicate) [![Inline docs](http://inch-ci.org/github/GarthDB/postcss-deduplicate.svg?branch=master)](http://inch-ci.org/github/GarthDB/postcss-deduplicate) [![npm version](https://badge.fury.io/js/postcss-deduplicate.svg)](https://badge.fury.io/js/postcss-deduplicate)

---

PostCSS plugin to remove duplicate class definitions

## Install

`npm i --save`

## Usage

```js
var dedupe = require('postcss-deduplicate');
var read = require('fs').readFileSync;

var css = postcss([dedupe('')])
  .process(read('path/to/source.css', 'utf8'))
  .then(result => { console.log(result.css.toString()) });
```

## Example

Input:

```css
.button {
  background: black;
}
.button {
  background: red;
}
.button {
  background: black;
}
```

Output:

```css
.button {
  background: black;
}
.button {
  background: red;
}
```
