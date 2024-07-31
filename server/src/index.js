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

app.use(
  cors({
    origin: 'https://fullstack-auth-app-gold.vercel.app',
    credentials: true,
  }),
);

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://fullstack-auth-app-gold.vercel.app',
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
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
