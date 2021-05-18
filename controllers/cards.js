const Card = require('../models/card');
const { showError } = require('../utils/utils');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => showError(err, res));
};

module.exports.createCard = (req, res) => {
  const owner = req.user._id;
  const { name, link } = req.body;
  Card.create({ name, link, owner })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => showError(err, res));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .orFail(() => new Error('invalidCardId'))
    .then((card) => res.send({ data: card }))
    .catch((err) => showError(err, res));
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => new Error('invalidCardId'))
    .then((card) => res.send({ data: card }))
    .catch((err) => showError(err, res));
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => new Error('invalidCardId'))
    .then((card) => res.send({ data: card }))
    .catch((err) => showError(err, res));
};
