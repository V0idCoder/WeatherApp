import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';

import weatherRoute from './routes/Weather.js';
import userRoute from './routes/User.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Configuration du moteur de template
app.set('view engine', 'ejs');

app.use('/weather', weatherRoute);

app.use('/user', userRoute);

app.get('/', (req, res) => {
  res.redirect('/weather/index');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});