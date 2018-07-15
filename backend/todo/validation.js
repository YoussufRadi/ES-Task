import Joi from 'joi';

export default {
  add: {
    body: {
      subject: Joi.string().required(),
      comment: Joi.string().required(),
      date: Joi.date(),
    },
  },
  edit: {
    body: {
      subject: Joi.string(),
      comment: Joi.string(),
      date: Joi.date(),
    },
  },
};
