'use strict';

const R = require('ramda');
const _ = require('lodash');
const v = require('voca');

const {
  BOLD,
  LIGHT,
  EXTRA_BOLD,
  REGULAR,
  SEMI_BOLD,
  SEMI_BOLD_ITALIC,
  ITALIC
} = require('../../constants/fonts');

const {
  formatPrecision
} = require('../../utils/math');

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;

const NUM_COLUMNS = 1;
const MARGIN = 35;

const FONT_SIZE = 20;
const LEADING = FONT_SIZE + FONT_SIZE/3;
const GUTTER = 18;
const PADDING = 18;

const COLUMN_WIDTH = (PAGE_WIDTH - (MARGIN * 2) - (NUM_COLUMNS * (PADDING * 2)) - ((NUM_COLUMNS - 1) * GUTTER)) / NUM_COLUMNS;
const BOX_WIDTH = COLUMN_WIDTH + (PADDING * 2);

const byTags = R.groupBy(obj => obj.tags || obj.type);

const Renderer = function(doc, data, options) {
  const {
    label,
    defaultColor
  } = options;

  function buildRecipe(data) {
    createNewPage(data['label']);

    _.reduce(byTags(data['collection']), (acc, cur, key) => {
      return buildTable(key, cur, acc.x, acc.y);
    }, {x: undefined, y: undefined})
  }

  function createNewPage(title) {
    doc
      .addPage({margin:0})
      .lineWidth(0)
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

  function buildTableHeader(label, x, y) {
    buildRow(x, y - 7, [
      {label:v.titleCase(label), font:SEMI_BOLD_ITALIC, size:FONT_SIZE - 5, x:0, y:5},
    ]);
    strokeH(x, y + LEADING, COLUMN_WIDTH);
  }

  function prepNextPosition(group, x, y) {
    const currentColumn = Math.ceil(x/COLUMN_WIDTH);

    const totalEstimateHeight = group.length * 20;

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

  function buildTable(title, group, start_x = MARGIN + PADDING, start_y = MARGIN + 30) {

    const position = prepNextPosition(group, start_x, start_y + 30);
    buildTableHeader(title, position.x, position.y);

    const last = group
      .reduce((acc, cur) => {
        const { x, y } = acc;

        const rowData = [
            {label:`${acc.i + 1}.`, font:ITALIC, size:FONT_SIZE - FONT_SIZE/2, x:0, y:FONT_SIZE/2},
            {label:`${cur.label}`, font:SEMI_BOLD, size:FONT_SIZE - 3, x:FONT_SIZE, y:3},
            {label:`${cur.notes ? cur.notes : ''}`, font:ITALIC, size:FONT_SIZE - FONT_SIZE/2, x:MARGIN + 200, y:FONT_SIZE/2},
            {label:formatPrecision(cur.q, 5), font:SEMI_BOLD, size:FONT_SIZE, x:MARGIN, y:0, options:{width: COLUMN_WIDTH - MARGIN - PADDING, align:'right'}},
            {label:cur.uom, font:ITALIC, size:FONT_SIZE-5, x:COLUMN_WIDTH - 10, y:5, options:{width: 50, align:'left'}}
          ];

        buildRow(x, y, rowData);

        if(!_.isEqual(_.last(group), cur)){
          strokeH(x, y + LEADING, COLUMN_WIDTH);
        }

        return {x, y:y + LEADING, i:acc.i + 1};
      }, {x: position.x, y: position.y + LEADING, i: 0});

    doc
      .rect(position.x - PADDING/2, position.y - PADDING/2, COLUMN_WIDTH + PADDING, last.y - position.y + PADDING)
      .dash(0)
      .stroke();

    return last;
  }

  return {
    render() {
      data.collection.forEach(buildRecipe);
    }
  }
}


module.exports = Renderer;
