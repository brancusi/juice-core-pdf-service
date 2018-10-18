'use strict';

const R = require('ramda');

const {
  formatPrecision
} = require('./math');

const {
  formatThousand
} = require('./string');

const formatReadable = num => R.pipe(formatPrecision, formatThousand)(num);

module.exports = {
  formatReadable
};
