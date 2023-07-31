import express from 'express';
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
  })
);
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.listen(8800, () => {
  console.log('listen port 8800');
});
