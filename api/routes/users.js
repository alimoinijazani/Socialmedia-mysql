import express from 'express';
const userRouter = express.Router();

userRouter.get('/test', (req, res) => {
  res.send('hello');
});
export default userRouter;
