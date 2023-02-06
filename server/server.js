const express = require('express');
const bodyParser = require('body-parser')
const { verify } = require('jsonwebtoken')
const helmet = require('helmet')
const routes = require('../src/routes/crmRoutes')
const rateLimit = require('express-rate-limit')
var cookieSession = require('cookie-session') // ref: https://www.npmjs.com/package/cookie-session
var Cookies = require('cookies') // ref: https://github.com/pillarjs/cookies

const app = express()


app.use(cookieSession({
  name: 'session',
  keys: [/* secret keys */],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


/**
 * It automatically adds 12 http security headers to your application
 */
app.use(helmet())

// it prevent the DOS attack
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

// middleware
/**
 * Middlerware are simple functions that have access requestion and response object in application
 */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// JWT setup
app.use((req, res, next)=> {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        verify(req.headers.authorization.split(' ')[1], "RESTFUL_SCERET_KEY", (err, decode) => {
            if(err){
                req.user = undefined
            }
            req.user = decode;
            next()
        })
    } else {
        req.user = undefined
        next()
    }
})

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

app.use("/wiki", express.static("./assets/wiki_india_1.html"))

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
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})