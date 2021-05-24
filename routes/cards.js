const cards = require('express').Router();
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

const { validateCardId, validateCard } = require('../middlewares/validation');

cards.get('/', getCards);
cards.post('/', validateCard, createCard);
cards.delete('/:cardId', validateCardId, deleteCard);
cards.put('/:cardId/likes', validateCardId, likeCard);
cards.delete('/:cardId/likes', validateCardId, dislikeCard);

module.exports = cards;
