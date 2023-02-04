const fs = require('fs')

const filePath = './assets/json/data.json'
const readStream = fs.createReadStream(filePath, 'utf-8')
let fileTxt = "";

// Important : This text file being read bit by bit or Chunk by Chunk
// Reading file with streams causes your nodeJS application to use less memory because reading files in chunks
readStream.on('data', data => {
    console.log(`I read ${data.length - 1} characters of text`)
    fileTxt += data;
})

readStream.once('data', data => {
    console.log(data)
})

// readStream.on('')

readStream.on('end', _ => {
    console.log('end reading files', fileTxt.length)
})


/**
 * Writeable file streams
 */
const writeStream = fs.createWriteStream('./assets/myFile.txt', 'utf-8')
const readFileStream = fs.createReadStream(filePath, 'utf-8')

// readFileStream.on('data', data => {
//     writeStream.write(data)  
// })

writeStream.write("hello df")
writeStream.write(" world\n")
writeStream.close()
// process.stdin.pipe(writeStream)
readFileStream.pipe(writeStream)