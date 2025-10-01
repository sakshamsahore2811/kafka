import { Kafka } from "kafkajs"

const kafka = new Kafka({
    clientId : 'my-app',
    brokers: ['http://10.5.50.76:9092'],
})

    const producer = kafka.producer()
    console.log("Connecting to producer...")
    await producer.connect()
    console.log("Connected to Producer")

    await producer.send({
        topic:'test-topic',
        message:[
            {
                value:'Hello KafkaJS user !'
            }
        ]
    })

await producer.disconnect()

const consumer = kafka.consumer({ groupId: 'test-group' })

await consumer.connect()
await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString(),
    })
  },
})





