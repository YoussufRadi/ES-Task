import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import validate from 'express-validation';
import validation from './validation';
import config from '../config';

import { sendMail, resetMail, sucessMail } from './mailer';
import { createUser, getUserByEmail, createResetToken, deleteToken, changePassword } from './model';

const userCreate = (req, res, next) => {
  const password = req.body.password;
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  createUser({ ...req.body })
    .then(() => {
      req.body.password = password;
      next();
    })
    .catch(error => next({ status: 409, detail: error }));
};

const userCreateWithService = (req, res, next) => {
  const value = req.params.service;
  if (value !== 'gmail' && value !== 'facebook') next({ status: 404, detail: 'Service not found' });
  const service = {};
  service[req.params.service] = req.params.id;
  createUser(service)
    .then(user => {
      req.body.service = req.params.service;
      req.body.id = req.params.id;
      next();
    })
    .catch(err =>
      next({
        status: 409,
        detail: {
          success: false,
          detail: err,
        },
      }),
    );
};

const userVerify = (req, res, next) => {
  const service = {};
  if (req.body.email) service.email = req.body.email;
  else if (req.body.service) {
    const value = req.body.service;
    if (value !== 'gmail' && value !== 'facebook') {
      next({ status: 404, detail: 'Service not found' });
    }
    service[req.body.service] = req.body.id;
  } else {
    next({
      status: 400,
      detail: 'Fields didnot meet either sign in with service or normal sign in',
    });
  }
  getUserByEmail(service)
    .then(user => {
      if (!user) next({ status: 401, detail: 'Invalid Username/Password' });
      if (req.body.email) {
        const passIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passIsValid) next({ status: 401, detail: 'Invalid Username/Password' });
      }
      req.token = jwt.sign({ id: user.id }, config.jwtSecret, {
        expiresIn: config.jwtExpiry,
      });
      next();
    })
    .catch(err => next({ status: 500, detail: err }));
};

export const ensureAuthenticated = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) next({ status: 403, detail: 'No token provided!' });
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) next({ status: 401, detail: err.message });
    req.id = decoded.id;
    next();
  });
};

const findByEmail = (req, res, next) => {
  getUserByEmail({ email: req.body.email })
    .then(user => {
      if (!user) next({ status: 404, detail: 'Invalid Email' });
      req.email = user.email;
      req.name = user.name;
      req.id = user.id;
      next();
    })
    .catch(err => {
      next({ status: 404, detail: 'User e-mail Not found' });
    });
};

const generateResetToken = (req, res, next) => {
  crypto.randomBytes(20, (err, buffer) => {
    req.token = buffer.toString('hex');
    next();
  });
};

const insertResetToken = (req, res, next) => {
  createResetToken(req.body.email, req.name, req.token)
    .then(() => {
      next();
    })
    .catch(err => next({ status: 500, detail: { detail: err, success: false } }));
};

const sendMailReset = (req, res, next) => {
  const props = { email: req.email, name: req.name, token: req.token };
  sendMail(resetMail(props), (err, info) => {
    if (err) {
      console.log(err);
      next({ status: 500, detail: { detail: err, success: false } });
    } else {
      console.log(`Email sent: ${info.response}`);
      next();
    }
  });
};

const consumeToken = (req, res, next) => {
  deleteToken(req.body.token)
    .then(user => {
      req.model = user;
      next();
    })
    .catch(err => next({ status: 404, detail: 'Token isnot correct' }));
};

const updatePassword = (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  changePassword(req.model.email, req.body.password)
    .then(() => {
      next();
    })
    .catch(err =>
      next({
        status: 400,
        detail: {
          success: false,
          detail: err.detai,
        },
      }),
    );
};

const sendMailSuccess = (req, res, next) => {
  const props = { email: req.model.email, name: req.model.name };
  sendMail(sucessMail(props), (err, info) => {
    if (err) {
      next({ status: 500, detail: { detail: err, success: false } });
    } else {
      console.log(`Email sent: ${info.response}`);
      next();
    }
  });
};

export const userSignUp = [validate(validation.signUp), userCreate, userVerify];
export const userSignUpWithService = [userCreateWithService, userVerify];
export const userSignIn = [validate(validation.signIn), userVerify];
export const forgetPassword = [
  validate(validation.forget),
  findByEmail,
  generateResetToken,
  insertResetToken,
  sendMailReset,
];
export const resetPassword = [
  validate(validation.reset),
  consumeToken,
  updatePassword,
  sendMailSuccess,
];
