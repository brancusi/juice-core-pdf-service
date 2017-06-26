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
const COLUMN_WIDTH = 230;

const Renderer = function(doc, data, options) {
  const {
    margin,
    fontSize,
    label,
    defaultColor
  } = options;

  function createNewPage(title) {
    doc
      .addPage({margin:0})
      .lineWidth(.25)
      .fillOpacity(0.8)
      .strokeColor(defaultColor)
      .dash(5, {space: 5})
      .fillColor('defaultColor');

    header(title);
  }

  function header(title, x = margin, y = margin) {
    doc
      .font(REGULAR)
      .fontSize(fontSize)
      .text(title, margin, margin);
  }

  function buildRow(start_x, start_y, columns) {
    return columns
      .reduce((acc, cur) => {
        const {
          label,
          font,
          size,
          x = 0,
          y = 0,
          options = {}
        } = cur;

        const castLabel = String(label);

        doc
          .font(font)
          .fontSize(size)
          .text(castLabel, start_x + x, start_y + y, options);

        const fieldWidth = doc
            .font(font)
            .fontSize(size)
            .widthOfString(castLabel);

        const fieldHeight = doc
            .font(font)
            .fontSize(size)
            .heightOfString(castLabel);

        return {
          width: Math.max(fieldWidth + x, acc.width),
          height: Math.max(fieldHeight + y, acc.height)
        };

      }, {width:0, height:0});
  }

  function strokeH(x, y, width, options = {width: 5, space: 5}) {
    doc
      .moveTo(x, y)
      .lineTo(x + width, y)
      .dash(options.width, {space:options.space})
      .stroke();
  }

  function buildTableHeader(label, x, y) {
    buildRow(x, y, [{label, font:SEMI_BOLD_ITALIC, size:fontSize - 5}]);
    strokeH(x, y + 16, COLUMN_WIDTH);
  }

  function prepNextPosition(position, group) {
    let x = position.x;
    let y = position.y;
    const numColumns = 2;

    const currentColumn = Math.ceil(x/COLUMN_WIDTH);

    const pastHeight = y > PAGE_HEIGHT - 60;
    const needsNewPage = (currentColumn >= numColumns) && pastHeight;

    if(needsNewPage) {
      createNewPage(`${data.title} - cont'd`);
      x = margin;
      y = margin + 50;

      buildTableHeader(`${group.label} cont'd`, x, margin + 30);
    } else if(pastHeight) {
      x = PAGE_WIDTH - (COLUMN_WIDTH + margin);
      y = margin + 50;

      buildTableHeader(`${group.label} cont'd`, x, margin + 30);
    }

    return {x, y};
  }

  function buildTable(group, start_x = margin, start_y = margin + 30) {

    buildTableHeader(group.label, start_x, start_y);

    return group.collection
      .reduce((acc, cur) => {
        const { x, y } = prepNextPosition(acc, group);

        const precise = cur.q.toFixed(1);

        const rowData = [
            {label:`${acc.i + 1}.`, font:ITALIC, size:fontSize - 5, x:0, y:5},
            {label:cur.label, font:SEMI_BOLD, size:fontSize - 3, x:20, y:3},
            {label:precise, font:SEMI_BOLD, size:fontSize, x:COLUMN_WIDTH - 80, y:0, options:{width: 50, align:'right'}},
            {label:cur.uom, font:ITALIC, size:fontSize-5, x:COLUMN_WIDTH - 20, y:5, options:{width: 50, align:'left'}}
          ];

        const lastCoords = buildRow(x, y, rowData);

        return {x, y:y + lastCoords.height, i:acc.i + 1};
      }, {x: start_x, y: start_y + 20, i: 0});
  }

  return {
    render() {
      createNewPage(data.title);
      data.collection
        .reduce((acc, cur) => {
          const position = buildTable(cur, acc.x, acc.y);
          return {x: position.x, y:position.y + 15};
        }, {x:undefined, y:undefined})
    }
  }
}


module.exports = Renderer;
