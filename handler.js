'use strict';

module.exports.index = (event, context, callback) => {
  const BUCKET = process.env.BUCKET;
  const PdfFactory = require('./factories/pdf-factory')();
  const uuid = require('uuid/v1');
  const AWS = require('aws-sdk');

  const s3 = new AWS.S3();
  const Uploader = require('s3-streaming-upload').Uploader;
  const pdfFactory = PdfFactory.create();

  const data = JSON.parse(event.body);
  const key = `${uuid()}.pdf`

  const upload = new Uploader({
    bucket:     BUCKET,
    objectName: key,
    stream:     pdfFactory.pdf(),
    debug:      true
  });

  upload.send(function (uploadError) {
    const headers = { "Access-Control-Allow-Origin" : "*" };

    if(uploadError) {
      callback(null, {
        headers,
        statusCode: 500,
        body: JSON.stringify({message:uploadError})
      });
    } else {
      const params = {Bucket: BUCKET, Key: key};
      s3.getSignedUrl('getObject', params, (signingError, url) => {
        if (signingError) {
          callback(null, {
            headers,
            statusCode: 500,
            body: JSON.stringify({message:signingError})
          });
        } else {
          callback(null, {
            headers,
            statusCode: 200,
            body: JSON.stringify({url})});
        }
      });
    }
  });

  pdfFactory.build(data);
};
