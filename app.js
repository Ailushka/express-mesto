const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/users.js');
const cards = require('./routes/cards.js');
const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use((req, res, next) => {
  req.user = {
    _id: '60a18d31fba5a4a4453f7f75'
  };

  next();
});

app.use('/users', users);
app.use('/cards', cards);
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' })
  }
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
