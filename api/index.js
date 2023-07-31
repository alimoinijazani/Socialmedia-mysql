import express from 'express';
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.listen(8800, () => {
  console.log('listen port 8800');
});
