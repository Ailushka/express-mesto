const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

function showError(err, res) {
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    res.status(BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
    return;
  }

  if (err.message === 'invalidUserId') {
    res.status(NOT_FOUND).send({ message: 'Пользователь по указанному _id не найден' });
    return;
  }

  if (err.message === 'invalidCardId') {
    res.status(NOT_FOUND).send({ message: 'Карточка с указанным _id не найдена' });
    return;
  } res.status(INTERNAL_SERVER_ERROR).send({ message: 'На сервере произошла ошибка' });
}

module.exports = { showError };
