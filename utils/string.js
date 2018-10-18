'use strict';

const numbro = require("numbro");

const formatThousand = num => numbro(num).format({thousandSeparated: true});

module.exports = {
  formatThousand
};
