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

app.use(express.json());
app.use(cookieParser());

app.use(authRouter);
app.use('/users', userRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
