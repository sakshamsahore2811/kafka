const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId:'my-app',
    brokers:['localhost:9092']
})

const producer = kafka.producer()

const run  = async()=>{
    console.log("Connecting producer...")
    await producer.connect()
    console.log("Producer connected")
    for (i=0;i<5;i++){
        await producer.send({
            topic:"test-topic",
            messages:[{value:`Kafka message ${i}`}]
        })
        console.log(`Kafka message ${i}`)
    }
    await producer.disconnect()
    console.log("Kafka disconnected")
}

run()