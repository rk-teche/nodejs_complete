const express = require("express")
const {WebSocketServer} = require("ws")

const server = express().listen(3000)
const wss = new WebSocketServer({server})

wss.on("connection", (ws) => {
    console.log("web socket connected")
    ws.on("message", (msg) => {
        console.log(`[Server] message received ${msg}`)
        // broadcast to everyone else connected
        wss.clients.forEach(client => {
            if(client !== ws && client.readyState === ws.OPEN){
                client.send(msg)
            }
        })
    })
    ws.on("close", () => {
        console.log("user disconnected")
    })
})

console.log("chat server waiting for connections")