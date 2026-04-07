import {kafka} from "./kafka-client.js"

async function ConsumerInit(){
    const consumer = kafka.consumer({ groupId: "test-1" });

    await consumer.connect();

    await consumer.subscribe({topic:"test-topic", fromBeginning:true});

    await consumer.run({
        eachMessage: async({topic, partition, message}) =>{
            console.log({
                topic,
                partition,
                value: message.value.toString(),
            });
        }
    });

}

ConsumerInit();