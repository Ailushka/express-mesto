const users = require('express').Router();
const {
  getUsers, getUserById, getUserInfo, patchUserInfo, patchUserAvatar,
} = require('../controllers/users');

users.get('/', getUsers);
users.get('/:_id', getUserById);
users.get('/me', getUserInfo);
users.patch('/me', patchUserInfo);
users.patch('/me/avatar', patchUserAvatar);

module.exports = users;
