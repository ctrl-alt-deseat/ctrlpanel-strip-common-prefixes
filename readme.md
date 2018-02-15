# Strip Common Prefixes

Strip common prefixes, that we don't need to display to the user, from hostnames.

## Installation

```sh
npm install --save @ctrlpanel/strip-common-prefixes
```

## Usage

```js
const stripCommonPrefixes = require('@ctrlpanel/strip-common-prefixes')

console.log(stripCommonPrefixes('auth.example.com'))
//=> example.com

console.log(stripCommonPrefixes('www.example.com'))
//=> example.com

console.log(stripCommonPrefixes('hotels.example.com'))
//=> hotels.example.com
```

## API

### `stripCommonPrefixes(hostname) => string`

Returns the same hostname, but with common prefixes stripped.
