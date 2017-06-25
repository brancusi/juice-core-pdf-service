'use strict';

const Globals = function(doc, options) {
  const {
    BOLD,
    LIGHT,
    EXTRA_BOLD,
    REGULAR,
    SEMI_BOLD,
    SEMI_BOLD_ITALIC,
    ITALIC
  } = require('../../constants/fonts');

  const PAGE_WIDTH = 612;
  const PAGE_HEIGHT = 792;

  return {
    render() {
      const {
        margin,
        fontSize,
        label,
        defaultColor
      } = options;

      // doc
      //   .image('images/logo.png', 570, 15, {width: 25});

      const footer_y = 720
      doc
        .font(ITALIC)
        .fontSize(fontSize)
        .text(`1 qt = 32 floz | 1 floz = 2 tbs | 1 tbs = 3 tsp`, margin, footer_y);
    }
  }

}
module.exports = Globals;
