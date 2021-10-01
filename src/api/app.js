const express = require('express');
const bodyParser = require('body-parser');
const { error } = require('./middlewares/error');
const signinRouter = require('./routes/signinRoute');
const movieRouter = require('./routes/movieRoute');
const userRouter = require('./routes/userRoute');
const loginRouter = require('./routes/loginRoute');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/signin', signinRouter);
app.use('/movies', movieRouter);
app.use(error);

module.exports = app;
