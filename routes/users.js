const users = require('express').Router();
const { getUsers, getUserById, createUser, patchUserInfo, patchUserAvatar} = require('../controllers/users.js');

users.get('/', getUsers);
users.post('/', createUser);
users.get('/:_id', getUserById);
users.patch('/me', patchUserInfo);
users.patch('/me/avatar', patchUserAvatar);

module.exports = users;
