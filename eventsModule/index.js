const EventEmitter = require('events')

const event = new EventEmitter()

//Defining the event
event.on("sayMyName", () => {
    console.log("Your name is Harshal")
})

event.on("checkPage", (code, message) => {
    console.log(`Your status code id ${code} and message is ${message}`)
})

//calling the custome event
event.emit("sayMyName")

event.emit('checkPage', 200, "OK")