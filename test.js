const assert = require('assert')
const stripCommonPrefixes = require('./')

assert.strictEqual(stripCommonPrefixes('example.com'), 'example.com')
assert.strictEqual(stripCommonPrefixes('www.example.com'), 'example.com')
assert.strictEqual(stripCommonPrefixes('login.example.com'), 'example.com')
assert.strictEqual(stripCommonPrefixes('hotels.example.com'), 'hotels.example.com')
