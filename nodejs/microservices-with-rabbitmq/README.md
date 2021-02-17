# Order Service

## Setup the queue

NOTE: `RabbitMQ` should be running in port `5672`

```
npm run setup
```

## Run in development

```
npm run start
```

or

## Build and Run

```
npm run build
```

## API

```
POST - /api/v1/order
```

Send a request:

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"data":"my-data"}' \
  http://localhost:3000/api/v1/processData
```
