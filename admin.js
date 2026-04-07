import { kafka } from "./kafka-client.js";

async function AdminInit(){
    const admin = kafka.admin();
    console.log("Admin is connecting...");

    await admin.connect();
    console.log("Admin connect success...");
    

    console.log("The test-topic is creating...");
    await admin.createTopics({
        topics:[{    
            topic: 'test-topic',
            numPartitions: 2,
            replicationFactor: 1,
        }]
    })
    console.log('Topics created successfully');

    await admin.disconnect();
}

AdminInit();