import express from 'express';
import userRouter from './routes/users.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users', userRouter);
app.listen(8800, () => {
  console.log('listen port 8800');
});
