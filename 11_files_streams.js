const fs = require('fs');

console.log('starting reading')
const files1 = fs.readdirSync('./node_modules')

//make the function load synchronously
fs.readdir('./node_modules', (err, files) => {
    if(err)
        throw `directory doesn't exit`
    // console.log('node_modules', files)
    console.log('stop reading node_modules')
})

const files2 = fs.readdirSync('./server')
console.log('stop reading')

// console.log(files1) // return the number of folders in an array
// console.log(files2) // return the number of files in an array



/**
 * Read Content of the files with fs.module
 */
const text = fs.readFileSync('./assets/json/data.json', "utf-8")
console.log('text', text)
console.log('reading content of file stop')


/**
 * Important : If we want to read binary files, we don't supply the encoding
 */



/**
 * Write File method
 */
const md = `
# This is auto generated files create with the help of NodeJS
 hello
`

fs.writeFile('./assets/nodes1.md', md.trim(), err => {
    if(err) 
        throw err
    console.log('file generated')
})


/**
 * Write directory
 */
const directoryName = './assets/files';

if(!fs.existsSync(directoryName)) { //check whether directory exist or not
    fs.mkdir(directoryName, err => {
        if(err) 
            throw err
        console.log('directory generated')
    })

} else {
    console.log('directory exist! :(')
}

/**
 * appendFile
 */
const jsonFile = require('./assets/json/data.json')

fs.appendFile(`${directoryName}/krishna.md`, `${jsonFile.name}`, err => {
    if(err){
        throw err
    }
})

// fs.renameSync(`${directoryName}/list.md`, `${directoryName}/data.md`)

setTimeout(() => {
    //empty directory before removing
    fs.readdirSync(directoryName).forEach(fileName => {
        console.log('fileName', fileName)
        fs.unlinkSync(`${directoryName}/${fileName}`)
    })

    //remove directory
    fs.rmdirSync(directoryName)
}, 5000)