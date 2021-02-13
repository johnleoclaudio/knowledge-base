const amqp = require('amqplib');

const connect = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    const result = await channel.assertQueue('jobs'); // check if channel exists, if not, then create it

    console.log('Waiting for messages...');

    channel.consume('jobs', (message) => {
      // message.content is Buffer and can be transformed into string
      const content = JSON.parse(message.content.toString());
      console.log('Received message', content);

      if (content.number === 5) {
        // acknowledge === tell server that we got it and you can remove it
        channel.ack(message);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

connect();
