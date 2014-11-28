# is-date

minimal utility to check if provided string is a date.

[![build status](https://secure.travis-ci.org/umayr/is-date.png)](http://travis-ci.org/umayr/is-date)

## Installation

```
npm install is-date --save
```

## Usage

```
var isDate = require('is-date');

isDate('2-2-12'); // true
isDate('20-2-12'); // true
isDate('2/2/12'); // true
isDate(2); // false
isDate(2.2); // false
isDate('somestring') // false
isDate('stringwith123') //false
```

## Credits
[Umayr Shahid](https://github.com/umayr/)
