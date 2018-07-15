import createError from 'http-errors';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import expressValidation from 'express-validation';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import auth from './auth/routes';

dotenv.config();

const app = express();

const options = {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
};
// Swagger Setup
const swaggerDocument = YAML.load('./apiDoc.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Application Logger
app.use(morgan('dev'));

app.use('/api/auth', auth);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  // console.log(err);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  if (err instanceof expressValidation.ValidationError) {
    res.status(err.status).json({ detail: err.errors });
  } else {
    res.status(err.status || 500);
    res.send(err);
  }
});

module.exports = app;
