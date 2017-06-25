'use strict';

const {
  BOLD,
  LIGHT,
  EXTRA_BOLD,
  REGULAR,
  SEMI_BOLD,
  SEMI_BOLD_ITALIC,
  ITALIC
} = require('../constants/fonts');

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;

const LineSheet = function(doc, collection, date, title, options) {
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

    header(date, title);
  }

  function header(date, title, x = margin, y = margin) {
    doc
      .font(REGULAR)
      .fontSize(fontSize)
      .text(`${title} - ${date}`, margin, margin);
  }

  function buildRow(start_x, start_y, columns) {
    columns
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
          .text(label, start_x + x, start_y + y, options);
      });
  }

  function strokeH(x, y, width, options = {width: 5, space: 5}) {
    doc
      .moveTo(x, y)
      .lineTo(x + width, y)
      .dash(options.width, {space:options.space})
      .stroke();
  }

  function buildTable(nodes, x = margin, y = margin + 30) {
    createNewPage();

    const cols = [
      {label:'#', font:SEMI_BOLD_ITALIC, size:fontSize - 5, x:0, y:0},
      {label:'Name', font:SEMI_BOLD_ITALIC, size:fontSize - 5, x:35, y:0},

      {label:'QTY', font:SEMI_BOLD_ITALIC, size:fontSize - 5, x:425, y:0, options:{width: 100, align:'right'}}
    ];

    buildRow(x, y, cols);
    strokeH(x, y + 20, PAGE_WIDTH - (margin * 2));

    for(var i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      const rowData = [
        {label:`${i + 1}.`, font:ITALIC, size:fontSize - 5, x:0, y:5},
        {label:node.label, font:SEMI_BOLD, size:fontSize, x:35, y:0},
      ];

      const first = node.converted[0];

      rowData.push({label:first.q, font:SEMI_BOLD, size:fontSize, x:340, y:0, options:{width: 100, align:'right'}})
      rowData.push({label:first.uom, font:ITALIC, size:fontSize-5, x:450, y:5, options:{width: 50, align:'left'}})

      const second = node.converted[1];

      if(second) {
        rowData.push({label:second.q, font:SEMI_BOLD, size:fontSize, x:400, y:0, options:{width: 100, align:'right'}})
        rowData.push({label:second.uom, font:ITALIC, size:fontSize-5, x:510, y:5, options:{width: 50, align:'left'}})
      }

      const labelWidth = doc
        .font(SEMI_BOLD)
        .fontSize(fontSize)
        .widthOfString(node.label);

      strokeH(80 + labelWidth, y + (i * 20) + 46, 360 - labelWidth, {space: 2, width:2});

      buildRow(x, y + (i * 20) + 30, rowData);
    }

  }

  return {
    render() {
      buildTable(collection);
    }
  }
}


module.exports = LineSheet;
