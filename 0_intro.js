// Machine Code > Assembly Language > Standard Language (i.e. C++, Java) > NodeJS 
// NodeJS is written in C++ just like the V8 Engine
const path = require("path")
/**
 * Features, Other than javascript :
 * 1. read and write files on computer
 * 2. connect to database
 * 3. Act as a server for content
 * 
 * 
 * Note: Since node run outside the browser, So we lose some JS features like `document Object Model` and can't interact with dom element any more 
 */

// console.log(global, "-------------")
// console.log(globalThis)

// document ref: https://nodejs.org/api/documentation.html

// Math.floor()

console.log(__dirname, "-------------") // return upto current folder name
console.log(__filename) // return upto current file name along with folder

console.log(path.basename(__dirname), "-------------") // return only current folder
console.log(path.basename(__filename)) // return only current file name

console.log(process)

/**
 * Create a nodeJS folder for `ans-shell` package move into `a1-ui` package
 */