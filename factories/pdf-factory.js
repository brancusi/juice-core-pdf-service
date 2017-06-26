'use strict';

const Factory = function() {
  const PDFDocument = require('pdfkit');
  const doc = new PDFDocument({autoFirstPage:false});

  const config = {
    margin: 35,
    fontSize: 15,
    defaultColor: '#231F20'
  }

  function setup() {
    registerFonts();
  }

  function registerFonts() {
    doc.registerFont('OpenSans-Bold', 'fonts/OpenSans-Bold.ttf');
    doc.registerFont('OpenSans-BoldItalic', 'fonts/OpenSans-BoldItalic.ttf');
    doc.registerFont('OpenSans-ExtraBold', 'fonts/OpenSans-ExtraBold.ttf');
    doc.registerFont('OpenSans-Italic', 'fonts/OpenSans-Italic.ttf');
    doc.registerFont('OpenSans-Light', 'fonts/OpenSans-Light.ttf');
    doc.registerFont('OpenSans-LightItalic', 'fonts/OpenSans-LightItalic.ttf');
    doc.registerFont('OpenSans-Regular', 'fonts/OpenSans-Regular.ttf');
    doc.registerFont('OpenSans-Semibold', 'fonts/OpenSans-Semibold.ttf');
    doc.registerFont('OpenSans-SemiboldItalic', 'fonts/OpenSans-SemiboldItalic.ttf');
  }

  return {
    create() {
      setup();
      return {
        pdf() {
          return doc;
        },
        build(data) {
          data
            .forEach(group => {
              const Renderer = require(`../renderers/${group.renderer}`);
              Renderer(doc, group, config).render();
            });
          doc.end();
        }
      }
    }
  }
}

module.exports = Factory;
