const users = require('express').Router();
const {
  getUsers, getUserById, getUserInfo, patchUserInfo, patchUserAvatar,
} = require('../controllers/users');

users.get('/', getUsers);
users.get('/me', getUserInfo);
users.get('/:_id', getUserById);
users.patch('/me', patchUserInfo);
users.patch('/me/avatar', patchUserAvatar);

module.exports = users;
