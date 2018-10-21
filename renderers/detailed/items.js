'use strict';

const v = require('voca');
const R = require('ramda');
const _ = require('lodash');

const {
  formatReadable
} = require('../../utils/formatting');

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
const COLUMN_WIDTH = 250;
const GROUP_GAP = 25;

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
      .text(title, x, y);
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

    buildRow(x, y, [{label:v.capitalize(label), font:SEMI_BOLD_ITALIC, size:fontSize}]);
    // strokeH(x, y + 16, COLUMN_WIDTH);
  }

  function prepNextPosition(position, title, group) {
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

      buildTableHeader(`${v.capitalize(title)} cont'd`, x, margin + 30);
    } else if(pastHeight) {
      x = PAGE_WIDTH - (COLUMN_WIDTH + margin);
      y = margin + 50;

      buildTableHeader(`${v.capitalize(title)} cont'd`, x, margin + 30);
    }

    return {x, y};
  }

  function buildTable(title, group, start_x = margin, start_y = margin + 30) {

    buildTableHeader(title, start_x, start_y);

    const rowCoords = group
      .reduce((acc, cur) => {
        const { x, y } = prepNextPosition(acc, title, group);

        const rowData = [
            {label:v.truncate(cur.label, 25), font:SEMI_BOLD, size:fontSize - 3, x:0, y:3},
            {label:formatReadable(cur.q), font:SEMI_BOLD, size:fontSize, x:COLUMN_WIDTH - 90, y:0, options:{width: 60, align:'right'}},
            {label:cur.uom, font:ITALIC, size:fontSize-5, x:COLUMN_WIDTH - 20, y:5, options:{width: 50, align:'left'}}
          ];

        const lastCoords = buildRow(x, y, rowData);

        strokeH(x, y, COLUMN_WIDTH);

        return {x, y:y + lastCoords.height, i:acc.i + 1};
      }, {x: start_x, y: start_y + 20, i: 0})

      return Object.assign({}, rowCoords, {y:rowCoords.y + GROUP_GAP});

  }

  const byTags = R.groupBy(obj => obj.tags || obj.type);

  function buildGroup(data) {
    // createNewPage(data['label']);

    _.reduce(byTags(data['collection']), (acc, cur, key) => {
      return buildTable(key, cur, acc.x, acc.y);
    }, {x: margin, y: margin + 30})
  }

  return {
    render() {
      createNewPage(data.title);


      data.collection.forEach(buildGroup)

      // data.collection
      //   .reduce((acc, cur) => {
      //     const position = buildTable(cur, acc.x, acc.y);
      //     return {x: position.x, y:position.y + 15};
      //   }, {x:undefined, y:undefined})
    }
  }
}


module.exports = Renderer;
