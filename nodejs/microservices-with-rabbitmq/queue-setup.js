require('dotenv').config();

const amqp = require('amqplib');

// RabbitMQ connection string
const messageQueueConnectionString = process.env.QURL;

const setup = async () => {
  console.log('Setting up RabbitMQ Exchanges/Queues');
  // connect to RabbitMQ Instance
  let connection = await amqp.connect(messageQueueConnectionString);

  // create a channel
  let channel = await connection.createChannel();

  // create exchange
  await channel.assertExchange('orders', 'direct', { durable: true });

  // create queues
  await channel.assertQueue('orders.requests', { durable: true });
  await channel.assertQueue('orders.results', { durable: true });

  // bind queues
  await channel.bindQueue('orders.requests', 'orders', 'request');
  await channel.bindQueue('orders.results', 'orders', 'result');

  console.log('Setup DONE');
  process.exit();
};

setup();
