import express from 'express';
import bodyParser from 'body-parser';
import welcomeRouter from '../src/app/routes/WelcomeRouter';

const app = express();
const PORT = 3000;

app.use('/welcome', welcomeRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})