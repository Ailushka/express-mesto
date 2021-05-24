const users = require('express').Router();
const {
  getUsers, getUserById, getUserInfo, patchUserInfo, patchUserAvatar,
} = require('../controllers/users');

const { validateUserId, validateUserInfo, validateUserAvatar } = require('../middlewares/validation');

users.get('/', getUsers);
users.get('/me', getUserInfo);
users.get('/:_id', validateUserId, getUserById);
users.patch('/me', validateUserInfo, patchUserInfo);
users.patch('/me/avatar', validateUserAvatar, patchUserAvatar);

module.exports = users;
