const amqp = require('amqplib'); // Advanced message queue protocol

const message = {
  number: Number(process.argv[2]),
};

const connect = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();

    // check if channel exists, if not, then create it
    const result = await channel.assertQueue('jobs');

    const sendResult = await channel.sendToQueue('jobs', Buffer.from(JSON.stringify(message)));
    console.log(`Job ${message.number} sent successfully!`);
  } catch (error) {
    console.error(error);
  }
};

connect();
