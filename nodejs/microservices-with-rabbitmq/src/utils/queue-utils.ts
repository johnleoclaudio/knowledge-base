const publishToChannel = (channel, { routingKey, exchangeName, data }) => {
  return new Promise((resolve, reject) => {
    channel.publish(
      exchangeName,
      routingKey,
      Buffer.from(JSON.stringify(data), 'utf-8'),
      { persistent: true },
      (err, ok) => {
        if (err) {
          return reject(err);
        }

        resolve(ok);
      },
    );
  });
};

export { publishToChannel };
