const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const mongoose = require('mongoose')

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://porwalcs019:<password>@cluster0.mq4gx42.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// const dbURI = 'mongodb+srv://porwalcs019:Mudra1995@cluster0.mq4gx42.mongodb.net/myFirstDatabase'
const dbURL = 'mongodb://127.0.0.1:27017'
const dbURI = 'mongodb://127.0.0.1:27017/blog-db'

app.use(express.static(__dirname))
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

let Message = mongoose.model('Message', {
    name: String,
    message: String
})

app.get('/api/articles/:name', async (req, res) => {
    const { name} = req.params;
    const article = await mongoose.model('articles').findOne({name})
    // const client = new MongoClient(dbURL);
    // await client.connect();
    if(article)
        res.send(article)
    else    
        res.send('no article found')        
    // const db = client.db('blog-db')
})

app.post('/messages', async (req, res) => {
    console.log('req.body', req.body)
    let newMsg = new Message(req.body)

    /**
     * callback hell - It could be more deeper but let's take this example for instance
     */
    // newMsg.save((err)=> {
    //     if(err){
    //         console.log('message saved failed', err)
    //         res.sendStatus(500)
    //     } else {
    //         Message.findOne({message: 'badword'}, (err, censored) => {
    //             if(censored){
    //                 console.log('censored word found !!', censored)
    //                 Message.remove({_id: censored.id}, err => {
    //                     console.log('censored word removed')
    //                 })
    //             }
    //         })
    //         io.emit('message', req.body)
    //         res.send(req.body)
    //     }
    // })

    /**
     * resolve callback hell with Promise
     */
    // newMsg.save()
    // .then(() => {
    //     console.log('saved!')
    //     return Message.findOne({message: 'badword'})
    // })
    // .then(censored => {
    //     if(censored){
    //         console.log('censored word found !!', censored)
    //         res.send({err: true, message: 'censored word found'})
    //         return Message.remove({_id: censored.id})
    //     }
    //     io.emit('message', req.body)
    //     res.send(req.body)
    // })
    // .catch((err) => {
    //     res.sendStatus(500)
    //     return console.error(err)
    // })

    /**
     * resolve callback hell with Async/await
     */
    try {
        throw 'error'
        let savedMessage = await newMsg.save()
        console.log('saved')

        let censored = await Message.findOne({ message: 'badword' })
        if (censored)
            await Message.remove({ _id: censored.id })
        else
            io.emit('message', req.body)

        res.send(req.body)

    } catch (error) {
        res.sendStatus(500)
        return console.error(error)
    } finally {
        //logger or database.close
        console.log('message post called')
    }
})

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        if (err) {
            console.log('could not fetch message', err)
            res.sendStatus(500)
            return
        }
        
        res.send(messages)
    })
})

// app.get('/messages/:user', (req, res) => {
//     // url params
//     const user = req.params.user;
//     Message.find({name: user}, (err, messages) => {
//         if (err) {
//             console.log('could not fetch message', err)
//             res.sendStatus(500)
//             return
//         }
        
//         res.send(messages)
//     })
// })

// route can have multiple parameter
app.get('/messages/:user/goobye/:sender', (req, res) => {
    
    const user = req.params.user;
    const sender = req.params.sender;
    console.log(`${user} and ${sender}`)
    res.send("hello")
})

io.on('connection', (_socket) => {
    console.log('user connected')
})

mongoose.connect(dbURI, {
    useMongoClient: true 
}, (err) => {
    console.log('db connection', err)
})

let server = http.listen(3000, (_s) => {
    console.log('server is listening on port =>', server.address().port)
})