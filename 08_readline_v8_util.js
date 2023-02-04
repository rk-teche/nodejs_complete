const { EventEmitter } = require("events")
/**
 * Core Modules
 */

/**
 * 1. Path Modules
 */
const path = require('path');

// console.log('current path', path.basename(__filename))

const dirUploads = path.join(__dirname, 'spec', 'support')

// console.log('spec file path', dirUploads)


/**
 * 2. Utility Modules
 */
const utils = require('util')

// utils.log('utilities modules', dirUploads)


/**
 * 3. V8 Modules
 */
const v8 = require('v8')
const { getHeapCodeStatistics } = require('v8')

// utils.log('v8 modules', v8.getHeapStatistics())
// console.log('getHeapCodeStatistics', getHeapCodeStatistics())

/**
 * 3. V8 Modules
 */
 const readLine = require('readline')
 const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
 })

//  rl.question('How old are u ? ', answer => {
//     console.log(`Your are ${answer} year(s) old`)
//     process.exit()
//  })



 // related to file 09_export_modules.js
//  const { inc, getCount} = require('./09_export_modules');
//     inc()
//     inc()
//     inc()
//  console.log(getCount())



 module.exports = (question, done) => {
   const answers = [];
   const emitter = new EventEmitter()
   const questionAnswered = (answer) => {
      emitter.emit("answer", answer)
      answers.push(answer.trim())
      if(answers.length < question.length){
         rl.question(question[answers.length], questionAnswered)
      } else {
         return done(answers)
      }
   }
   rl.question(question[0], questionAnswered)
   return emitter
 }

