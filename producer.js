import {kafka} from "./kafka-client.js"

 async function ProducerInit(){
    const producer = kafka.producer();

    console.log("Producer is connecting...");
    await producer.connect();
    console.log("Producer successfully connected..");

    await producer.send({
        topic:"test-topic",
        messages:[{value: ' Test topic created 😂'}]
    })

    console.log('Messages sent successfully');

    await producer.disconnect();
    console.log("Producer successfully disconnected");
}

ProducerInit();