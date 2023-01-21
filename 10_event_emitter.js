/**
 * Event Emitter : A powerful tool that ships with Node is event emitter,
 *   It is based on Pub-Sub design pattern
 *   It gives us feature of emitting custom event and wiring up listeners and handlers for those events
 * 
 *   Event Emitter is asynchronous 
 */ 
const {EventEmitter} = require('events')
const { fstat } = require('fs')

const emitter = new EventEmitter()

emitter.on('customEvent', (message, sentBy) => {
    console.log('message', message)
    console.log('sentBy', sentBy)
})

// emitter.emit("customEvent", "Hello world", "Machine")

process.stdin.on('data', (data) => {
    const input = data.toString().trim()
    emitter.emit("customEvent", input, "Terminal")
    input === 'exit' && emitter.emit("customEvent", 'Good bye!', "Terminal") && process.exit()
})
