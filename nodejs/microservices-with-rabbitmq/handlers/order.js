const amqp = require('amqplib');

const { publishToChannel } = require('../utils/queue-utils');

const QURL = process.env.QURL;

const orderHandler = async (req, res) => {
  const orderId = +new Date();

  // connect to Rabbit MQ and create a channel
  let connection = await amqp.connect(QURL);
  let channel = await connection.createConfirmChannel();

  // publish the data to Rabbit MQ
  let requestData = req.body.data;
  console.log('Published a new order:', orderId);

  await publishToChannel(channel, {
    routingKey: 'request',
    exchangeName: 'orders',
    data: { orderId, requestData },
  });

  // send the request id in the response
  res.send({ orderId });
};

module.exports = orderHandler;
