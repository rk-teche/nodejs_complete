const { createServer } = require("http")

createServer((req, res) => {
    // res.writeHead(200, {"Content-Type": "text/plain"});
    // res.end("Hello World")
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
        <h1>world !!</h1>
        request made for port ${req.url}
    `)
}).listen(3000)

console.log(`web server is listening on port 3000`)