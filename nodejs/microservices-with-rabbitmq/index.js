require('dotenv').config();

const app = require('express')();
const bodyParser = require('body-parser');

const { rootHandler, orderHandler } = require('./handlers');

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get('/', rootHandler);
app.post('/api/v1/order', orderHandler);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
