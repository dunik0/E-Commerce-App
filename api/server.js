import express from 'express';
import cors from 'cors';
import PostgreSQL from 'pg';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs';
import * as uuid from 'uuid';
import config from './DBConfig.json';

const app = express();
const port = 4000;
const { Pool } = PostgreSQL;

app.use(cors());
app.use(express.static('products'));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const form = new formidable.IncomingForm();
form.multiples = true;
form.maxFileSize = 50 * 1024 * 1024; // 5MB
form.uploadDir = 'products';

const db = new Pool({
  host: config.host,
  port: config.port,
  database: config.db,
  user: config.user,
  password: config.pass,
});

app.get('/getAllProducts', (req, res) => {
  db.query('SELECT * FROM products', [], (error, results) => {
    if (error) throw error;
    console.log(results);
    res.json(results.rows);
  });
});

app.post('/uploadProduct', (req, res) => {
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    const { title, description, category, price } = fields;
    const file = files.image;
    const newFilename = `${file['newFilename']}.png`;

    if (file['mimetype'] === 'image/jpeg' || file['mimetype'] === 'image/png')
      fs.renameSync(file['filepath'], `products/${newFilename}`);
    else return;

    db.query(
      `INSERT INTO products (title, description, price, category, image)
              VALUES ($1, $2, $3, $4, $5)`,
      [title, description, price, category, newFilename],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).send('Product added');
      },
    );
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
