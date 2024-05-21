// pages/api/upload.js
import multer from 'multer';
import nextConnect from 'next-connect';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/pdfs',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry, something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post((req, res) => {
  res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};


// // pages/api/upload.js

// import formidable from 'formidable';
// import fs from 'fs';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async (req, res) => {
//   const form = new formidable.IncomingForm();
//   form.uploadDir = './public/uploads'; // Specify the directory where you want to save the files

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       res.status(500).json({ error: 'Error uploading file.' });
//       return;
//     }

//     const oldPath = files.file.path;
//     const newPath = `${form.uploadDir}/${files.file.name}`;

//     fs.rename(oldPath, newPath, (err) => {
//       if (err) {
//         res.status(500).json({ error: 'Error saving file.' });
//         return;
//       }

//       res.status(200).json({ message: 'File uploaded and saved successfully.' });
//     });
//   });
// };