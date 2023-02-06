const express = require('express');
const bodyParser = require('body-parser')
const routes = require('../src/routes/crmRoutes')

const app = express()



// middleware
/**
 * Middlerware are simple functions that have access requestion and response object in application
 */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes.default(app)
// app.use((req, res, next) => {
    
//     console.log(`${req.method} request for ${req.url}`)
//     if(Object.keys(req.body).length){
//         console.log(req.body)
//     }
//     next(); // forward the request
// }, (req, res) => {
//     res.send("hellow")
// })

// app.use("/wiki", express.static("./assets/wiki_india_1.html"))

app.listen(3000, (_) => {
    console.log('listening on port => 3000')
})

/**
 * Connect with mongodb
 * REf: https://mongoosejs.com/
 */
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
dotEnv.config()
console.log('dotEnv', process.env.MONGODB_URL)
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true})