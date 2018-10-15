'use strict';

const formatPrecision = (num, roundBelow = 10) => num < roundBelow ? num.toFixed(1) : num.toFixed(0)

module.exports = {
  formatPrecision
};
