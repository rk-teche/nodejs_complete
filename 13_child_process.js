/**
 * Child Processes Module - It allows you to execute external processes in your environment
 * Two main function to execute this processes -
 *  1. exec (execute)
 *  2. spawn
 */

//all child_processes are synchronous by default
const cp = require("child_process")

// cp.exec('open https://linkedin.com/learning')
// cp.exec('open -a Terminal .')

// cp.exec("lst", (err, data, standardError) => {
//     if(err)
//         throw err
//     data && console.log(data)    
//     standardError && console.log(standardError)    
// })

// cp.exec("node 12_streams", (err, data, standardError) => {
    // if(err)
    //     throw err
    // data && console.log(data)    
    // standardError && console.log(standardError)    
// })


/**
 * Spawn -> Execute process is design to handle synchronous function
 *  Processes that are waiting for input then execute -> we use spawan in this case
 */

const questionApp = cp.spawn("node", ["12_streams.js"])

questionApp.stdout.on("data", data => {
    console.log('app data', data)
})