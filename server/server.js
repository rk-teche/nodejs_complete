const express = require('express');
const bodyParser = require('body-parser')

const app = express()

// middleware
app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    if(Object.keys(req.body).length){
        console.log(req.body)
    }
    next(); // forward the request
})

app.use("/", express.static("./assets/wiki_india_1.html"))


app.listen(3000, (_) => {
    console.log('listening on port => 3000')
})