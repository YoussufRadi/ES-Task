import Joi from 'joi';

export default {
  signUp: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .required(),
      name: Joi.string().required(),
    },
  },
  signIn: {
    body: {
      email: Joi.string().email(),
      password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
    },
  },
  forget: {
    body: {
      email: Joi.string()
        .email()
        .required(),
    },
  },
  reset: {
    body: {
      token: Joi.string().required(),
      password: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .required(),
    },
  },
};
