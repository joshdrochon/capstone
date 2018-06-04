const functions = require('firebase-functions');
const os = require('os');
const path = require('path')
const spawn = require('child-process-promise').spawn;
const cors = require('cors')({origin: true});
const Busboy = require('busboy');
const fs = require('fs');

const gcconfig = {
  projectId: 'yoga-with-natali',
  keyFilename: 'yoga-with-natali-firebase-adminsdk-c2xj0-85e88b8316.json'
}
const gcs = require('@google-cloud/storage')(gcconfig);

exports.onFileChange = functions.storage.object().onFinalize(event => {
  const bucket = event.bucket;
  const contentType = event.contentType;
  const filePath = event.name;

  console.log('File change detected, function execution started!');

  if(path.basename(filePath).startsWith('resized-')){
    console.log('Already RESIZED. We are all set!');
    return;
  }

  const destBucket = gcs.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metadata = { contentType: contentType };
  return destBucket.file(filePath).download({
    destination: tmpFilePath
  }).then(() => {
    return spawn('convert', [tmpFilePath, '-resize', '500x500', tmpFilePath]);
  }).then(() => {
    return destBucket.upload(tmpFilePath, {
      destination: 'resized-' + path.basename(filePath),
      metadata: metadata
    })
  });
});

exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if(req.method !== 'POST'){
      return res.status(500).json({
        message: 'Sorry, this endpoint only receives post requests!'
      });
    }
    const busboy = new Busboy({headers: req.headers});
    let uploadData = null;

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = { file: filepath, type: mimetype };
      file.pipe(fs.createWriteStream(filepath));
    });

    busboy.on('finish', () => {

      const bucket = gcs.bucket('yoga-with-natali.appspot.com');
      bucket.upload(uploadData.file, {
        uploadType: 'media',
        metadata: {
          metadata: {
            contentType: uploadData.type
          }
        }
      })
      .then(() => {
        res.status(200).json({
          message: 'Successful!!'
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
    });
    busboy.end(req.rawBody);
  });
});
