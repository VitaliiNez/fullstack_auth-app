/* eslint-disable no-console */

'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();

const cookieParser = require('cookie-parser');

const { authRouter } = require('./routes/auth.route');
const { userRouter } = require('./routes/user.route');
const { errorMiddleware } = require('./middlewares/errorMiddleware');

const PORT = process.env.PORT;

app.use(function (req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization',
  );
  next();
});

app.use(express.json());
app.use(cookieParser());

app.use(authRouter);
app.use('/users', userRouter);

app.use((req, res) => {
  res.status(404).send('The page is not found');
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
