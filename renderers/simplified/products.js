'use strict';

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

const NUM_COLUMNS = 3;
const MARGIN = 35;

const FONT_SIZE = 12;
const LEADING = FONT_SIZE;
const GUTTER = 17;
const PADDING = 6;

const COLUMN_WIDTH = (PAGE_WIDTH - (MARGIN * 2) - (NUM_COLUMNS * (PADDING * 2)) - ((NUM_COLUMNS - 1) * GUTTER)) / NUM_COLUMNS;
const BOX_WIDTH = COLUMN_WIDTH + (PADDING * 2);

const Renderer = function(doc, data, options) {
  const {
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

  function header(title, x = MARGIN, y = MARGIN) {
    doc
      .font(REGULAR)
      .fontSize(FONT_SIZE)
      .text(title, MARGIN, MARGIN);
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

  function buildTableHeader(group, x, y) {
    
    const precise = group.q.toFixed(1);

    buildRow(x, y - 7, [
      {label:group.label, font:SEMI_BOLD_ITALIC, size:FONT_SIZE - 5, x:0, y:5},
      {label:precise, font:SEMI_BOLD_ITALIC, size:FONT_SIZE - 3, x:COLUMN_WIDTH - 80, y:3, options:{width: 50, align:'right'}},
      {label:group.uom, font:ITALIC, size:FONT_SIZE-5, x:COLUMN_WIDTH - 20, y:5, options:{width: 50, align:'left'}}

    ]);
    strokeH(x, y + LEADING, COLUMN_WIDTH);
  }

  function prepNextPosition(group, x, y) {
    const currentColumn = Math.ceil(x/COLUMN_WIDTH);

    const totalEstimateHeight = group.collection.length * 20;

    const pastHeight = (y + totalEstimateHeight) > PAGE_HEIGHT - 60;
    const needsNewPage = (currentColumn >= NUM_COLUMNS) && pastHeight;

    if(needsNewPage) {
      createNewPage(`${data.title} - cont'd`);
      x = MARGIN + PADDING;
      y = MARGIN + 30;
    } else if(pastHeight) {
      x = MARGIN + PADDING + (currentColumn * (COLUMN_WIDTH + GUTTER + (PADDING * 2)));
      y = MARGIN + 30;
    }

    return {x, y};
  }

  function buildTable(group, start_x = MARGIN + PADDING, start_y = MARGIN + 30) {
    const position = prepNextPosition(group, start_x, start_y);
    buildTableHeader(group, position.x, position.y);

    const last = group.collection
      .reduce((acc, cur) => {
        const { x, y } = acc;

        const precise = cur.q.toFixed(1);

        const rowData = [
            {label:`${acc.i + 1}.`, font:ITALIC, size:FONT_SIZE - 5, x:0, y:5},
            {label:cur.label, font:SEMI_BOLD, size:FONT_SIZE - 3, x:10, y:3},
            {label:precise, font:SEMI_BOLD, size:FONT_SIZE, x:COLUMN_WIDTH - 80, y:0, options:{width: 50, align:'right'}},
            {label:cur.uom, font:ITALIC, size:FONT_SIZE-5, x:COLUMN_WIDTH - 20, y:5, options:{width: 50, align:'left'}}
          ];

        buildRow(x, y, rowData);

        return {x, y:y + LEADING, i:acc.i + 1};
      }, {x: position.x, y: position.y + LEADING, i: 0});

    doc
      .rect(position.x - PADDING, position.y - PADDING, COLUMN_WIDTH + (PADDING * 2), last.y - position.y + (PADDING * 2))
      .dash(1)
      .stroke();

    return last;
  }

  return {
    render() {
      createNewPage(data.title);
      data.collection
        .reduce((acc, cur) => {
          const position = buildTable(cur, acc.x, acc.y);
          return {x: position.x, y:position.y + GUTTER};
        }, {x:undefined, y:undefined})
    }
  }
}


module.exports = Renderer;
