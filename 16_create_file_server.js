const { createServer } = require("http")
const { createReadStream } = require("fs")

const sendFile = (res, status, type, file) => {
    res.writeHead(status, {"Content-type": type})
    createReadStream(file).pipe(res)
}

createServer((req, res) => {

    switch(req.url){
        case "/" :
            return sendFile(res, 200, 'text/html', './assets/wiki_india_1.html')
        case "/img/desert" :
            return sendFile(res, 200, 'image/jpg', './assets/car.png')
    }
}).listen(3000)

console.log(`web server is listening on port 3000...`)