- RabbitMQ Server listens 5672
- Publisher/ Consumer establishes stateful TCP connection to the server. Uses AMQP
- Server will push when consumers are ready

## Spin up RabbitMQ using Docker

```
docker run --name rabbitmq -p 5672:5672 rabbitmq
```

## Publish message

```
npm run publish message_here
```

## Consume message

```
npm run consume
```
