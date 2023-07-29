import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(8080, () => {
  console.log('listen port 8080');
});
