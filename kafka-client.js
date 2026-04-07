import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId:"Test-client",
    brokers:["localhost:9092"]
});

export {kafka}