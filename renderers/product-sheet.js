'use strict';

const {
  BOLD,
  LIGHT,
  EXTRA_BOLD,
  REGULAR,
  SEMI_BOLD,
  SEMI_BOLD_ITALIC,
  ITALIC,
  LIGHT_ITALIC
} = require('../constants/fonts');

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;

const ProduceSheet = function(doc, data, options) {
  const {
    margin,
    fontSize,
    label,
    defaultColor
  } = options;

  function createNewPage() {
    doc
      .addPage({margin:0})
      .lineWidth(.25)
      .fillOpacity(0.8)
      .strokeColor(defaultColor)
      .dash(5, {space: 5})
      .fillColor('defaultColor');

    header(data.date);
  }

  function header(date, x = margin, y = margin) {
    doc
      .font(REGULAR)
      .fontSize(fontSize)
      .text(`Product Sheet - ${date}`, margin, margin);
  }

  function buildProduct(start_x, start_y, index, product) {
    const WIDTH = 250;
    const HEIGHT = 280;

    doc
      .rect(start_x, start_y, WIDTH, HEIGHT)
      .dash(5, {space: 5})
      .stroke();

    doc
      .font(SEMI_BOLD_ITALIC)
      .fontSize(fontSize - 3)
      .text(`#0${index}.`, start_x + 8, start_y + 10.5);

    doc
      .font(SEMI_BOLD_ITALIC)
      .fontSize(fontSize - 1)
      .text(product.label, start_x + 40, start_y + 8);

    doc
      .font(SEMI_BOLD_ITALIC)
      .fontSize(fontSize - 3)
      .text(`${product.q}ct`, start_x + WIDTH - 110, start_y + 10.5, {width: 100, align:'right'})

    strokeH(start_x, start_y + 35, WIDTH)

    for(var i = 0; i < product.children.length; i++) {
      const child = product.children[i];
      const new_y = start_y + 40 + (i * 18);
      const columns = [
        {label:`${i + 1}.`, font:LIGHT_ITALIC, size:fontSize - 4, x:8, y:8},
        {label:child.label, font:REGULAR, size:fontSize - 4, x:25, y:8},
        {label:child.q, font:REGULAR, size:fontSize - 4, x:WIDTH - 130, y:8, options:{width: 100, align:'right'}},
        {label:child.uom, font:LIGHT_ITALIC, size:fontSize - 8, x:WIDTH - 60, y:12, options:{width: 50, align:'right'}}
      ]
      .forEach(column => {
        const {
          label,
          font,
          size,
          x,
          y,
          options = {}
        } = column;

        doc
          .font(font)
          .fontSize(size)
          .text(label, start_x + x, new_y + y, options);
      });

      if(product.note !== undefined || product.note !== null) {
        doc
          .font(ITALIC)
          .fontSize(fontSize - 4)
          .text(product.note, start_x + 10, start_y + HEIGHT - 50, {width: WIDTH - 10});
      }
    }
  }

  function strokeH(x, y, width) {
    doc
      .moveTo(x, y)
      .lineTo(x + width, y)
      .stroke();
  }

  function buildGrid(products, x = margin, y = margin + 30) {
    const perPage = 4;
    let lastPage = 0;

    const slotPositions = [
      {x:0, y:0},
      {x:290, y:0},
      {x:0, y:320},
      {x:290, y:320}
    ];

    createNewPage();

    for(var i = 0; i < products.length; i++) {

      const page = Math.floor(i / perPage);

      if(lastPage < page) {
        createNewPage();
        lastPage = lastPage + 1;
      }

      const slot = slotPositions[(i % perPage)];

      buildProduct(slot.x + margin, slot.y + 40 + margin, i + 1, products[i]);
    }
  }

  return {
    render() {
      buildGrid(data.products);
    }
  }
}


module.exports = ProduceSheet;
