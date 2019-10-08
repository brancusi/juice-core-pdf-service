'use strict';

const R = require('ramda');
const _ = require('lodash');
const v = require('voca');
const moment = require('moment');

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
const NUM_COLUMNS = 1;

const MARGIN = 32;

const FONT_SIZE = 16;
const LEADING = FONT_SIZE;
const GUTTER = 18;
const PADDING = 18;

const COLUMN_WIDTH = PAGE_WIDTH - PADDING;

const Renderer = function(doc, data, options) {
  const {
    label,
    defaultColor
  } = options;

  function createNewPage(title) {
    doc
      .addPage({margin:0})
      .lineWidth(1)
      .fillOpacity(0.8)
      .strokeColor(defaultColor)
      // .dash(5, {space: 5})
      .fillColor('defaultColor');

    header(title);
  }

  function header(title, x = MARGIN, y = MARGIN) {
    doc
      .font(REGULAR)
      .fontSize(FONT_SIZE * 1.4)
      .text(title, MARGIN, MARGIN);
  }

  function buildRow(start_x, start_y, columns) {
    const rowData = columns
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

      // doc
      //   .rect(PAGE_WIDTH - (MARGIN*2), start_y, FONT_SIZE * 2, FONT_SIZE + LEADING/2)
      //   .dash(0)
      //   .stroke();

      strokeH(PAGE_WIDTH - (MARGIN * 2) - 20, start_y + FONT_SIZE, 30, {width: 2, space: 2})

      return rowData;
  }

  function strokeH(x, y, width, options = {width: 5, space: 5}) {
    doc
      .moveTo(x, y)
      .lineTo(x + width, y)
      // .dash(options.width, {space:options.space})
      .stroke();
  }

  function buildTableHeader(label, x, y) {
    buildRow(x, y - 7, [
      {label:v.titleCase(label), font:SEMI_BOLD_ITALIC, size:FONT_SIZE - 5, x:0, y:5},
    ]);
    strokeH(x, y + LEADING, COLUMN_WIDTH);
  }

  function prepNextPosition(position, group) {
    let x = position.x;
    let y = position.y + LEADING;

    const needsNewPage = y > (PAGE_HEIGHT - 60);

    if(needsNewPage) {
      createNewPage(`${data.title} - cont'd`);
      x = MARGIN;
      y = MARGIN + FONT_SIZE + 50;
    }

    return {x, y};
  }

  function buildTable(group, date, start_x = MARGIN, start_y = MARGIN + 30) {

    return group
      .reduce((acc, cur) => {
        const { x, y } = prepNextPosition(acc, group);

        const precise = cur.q.toFixed(0);
        const dateStamp = moment(date).add(cur.shelfLife, 'd');
        const formattedDate = dateStamp.format("MM/DD/YY");

        const rowData = [
            {label:`${acc.i + 1}.`, font:ITALIC, size:FONT_SIZE - FONT_SIZE/2, x:0, y:FONT_SIZE/2},
            {label:`${cur.label}`, font:SEMI_BOLD, size:FONT_SIZE - 3, x:FONT_SIZE, y:3},
            {label:formattedDate, font:SEMI_BOLD, size:FONT_SIZE - 3, x:340, y:3},
            {label:precise, font:SEMI_BOLD, size:FONT_SIZE, x:MARGIN - 40, y:0, options:{width: COLUMN_WIDTH - (MARGIN * 2) - (PADDING * 2), align:'right'}}
          ];

        const lastCoords = buildRow(x, y, rowData);

        strokeH(x, y - LEADING/2, COLUMN_WIDTH - (MARGIN * 2), {width: 2, space: 20});

        return {x, y:y + lastCoords.height, i:acc.i + 1};
      }, {x: start_x, y: start_y + 20, i: 0});
  }

  return {
    render() {
      const formattedDate = moment(data.date).format('dddd - MM/DD/YY');
      createNewPage(`${data.title} - ${formattedDate}`);
      buildTable(data.collection, data.date);
    }
  }
}


module.exports = Renderer;
