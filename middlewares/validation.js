const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

module.exports.validateCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
});

module.exports.validateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required()
      .custom((value, helpers) => {
        if (validator.isURL(value, { require_protocol: true })) {
          return value;
        }
        return helpers.message('Неправильный формат ссылки');
      }),
  }),
});

module.exports.validateUserId = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().length(24).hex(),
  }),
});

module.exports.validateUserInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

module.exports.validateUserAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required()
      .custom((value, helpers) => {
        if (validator.isURL(value, { require_protocol: true })) {
          return value;
        }
        return helpers.message('Неправильный формат ссылки');
      }),
  }),
});

module.exports.validateSignUp = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string()
      .custom((value, helpers) => {
        if (validator.isURL(value, { require_protocol: true })) {
          return value;
        }
        return helpers.message('Неправильный формат ссылки');
      }),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.validateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});
