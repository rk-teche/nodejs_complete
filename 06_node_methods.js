/**
 * ref: more about NodeJS global APIs - https://nodejs.org/api/globals.html
 */
console.log(global)

global.console.log('hello world')

console.log('globalThis ==>', globalThis)

console.log('__dirname', __dirname) // return current directory
console.log('__filename', __filename) // return current file

const path = require("path") // path module : It is one of those modules that ships with NodeJS

console.log('path ==>', path.basename(__dirname)) // pluck the fileName or FolderName from the full path

/**
 * Important : Every node files we created, it referes to as module : It contains its own code and 
 * we want to load other modules we must use the require function
 */


/**
 * Process Object : Process Object contains
 *  1. Environment information
 *  2. Read environment variables
 *  3. Collect information from terminal when we load the application
 *  4. Communicate with terminals or parent processes through standard input and output
 *  5. Also use to exit the current process
 */
console.log('process ==>', process.pid)
console.log('process ==>', process.version)
console.log('process ==>', process.argv) //anything we type of run the node file gets added in argv e.g. `node 06_global_object --rk "The Green Chutney"

const [directoryName, fileName, flag1, flag2] = process.argv;

console.log('directoryName', directoryName)
console.log('fileName', fileName)
console.log('flag1', flag1)
console.log('flag2', flag2)

/**
 * Stdin/stdout -> use this object to read and write data in terminal
 */
console.log('process stdin', process.stdin)
console.log('process stdout', process.stdout)

process.stdout.write('hello \n')
process.stdout.write('word')

const question = [
    "package version",
    "want support for stylesheet",
    "preferred language"
]

const ask = (i = 0) => {
    return process.stdout.write(`\n\n ${question[i]} > `)
}

ask()

let answers = [];
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if(answers.length < question.length){
        ask(answers.length)
    } else {
        process.exit()
    }
   
})

process.on('exit', ()=> {
    console.log('\n\nThank you for answers \n')
    console.log('We are generating report for you...')
})