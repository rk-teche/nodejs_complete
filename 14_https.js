const https = require("https")
const fs = require("fs")

const url = "https://en.wikipedia.org/wiki/India"

// any request running over https will use `443 port`
const options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/India",
    method: "GET"
}

const request = https.request(options, res => {
    let responseBody = ""
    res.setEncoding("utf-8") 
    res.on("data", (data) => {
        console.log('---chunk', data.length)
        responseBody += data
    })    
    res.on("end", _ => {
        fs.writeFile('./assets/wiki_india.html', responseBody, err => {
            if(err) 
                throw err
            console.log('wiki india file created')
        })
    })
})

request.end()


const request2 = https.get(url, res => {
    let download = fs.createWriteStream("./assets/wiki_india_1.html")
    res.pipe(download)
    res.on('end', _ => {
        console.log('complete request')
    })
})

request2.end()