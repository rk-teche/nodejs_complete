import ReconnectingWebSocket from "reconnecting-websocket"
import WS from "ws"
// websocket
let ws_host = "localhost";
let ws_port = "3000";

const options = {
    WebSocket: WS, // custom WebSocket constructor
    connectionTimeout: 1000,
    maxRetries: 10,
};

const rws  = new ReconnectingWebSocket(`ws://${ws_host}:${ws_port}`, [], options)

rws.addEventListener("open", () => {
    console.log(`[Client] connection to Websocket server was opened`)
    rws.send("Hello, this is a message from a client")
    rws.send(JSON.stringify({ // this json refer JSON RPC (remoate procedure call protocol) -> which is a protocal between different clients 
        method: "set-color",
        params: {
            color: "blue"
        }
    }))
})

rws.addEventListener("message", ({data}) => {
    console.log(`[Client] message received ${data}`)

    try{
        let m = JSON.parse(data)
        handleMessage(m)
    } catch(err) {
        console.log(`[Client] message is not parseable to JSON`)
    }
})

rws.addEventListener("close", () => {
    console.log(`[Client] connection closed`)
})

rws.onerror = (err) => {
    if(err.code === "EHOSTDOWN"){
        console.log("Server failed");
    }
}

// message handlers
let handlers = {
    "set-color" : function(m){
        console.log(`[Client] message handled`)
    }
}

function handleMessage({method}){
    if(!method) return;

    const handler = handlers[method]
    if(handler){
        handler()
    } else {
        console.log(`[Client] no handler defined`)
    }

}