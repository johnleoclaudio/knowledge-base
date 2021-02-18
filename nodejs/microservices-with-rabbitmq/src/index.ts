require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';

import { rootHandler, orderHandler } from './handlers';

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get('/', rootHandler);
app.post('/api/v1/order', orderHandler);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
