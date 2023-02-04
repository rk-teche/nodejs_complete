const collectAnswer = require('./08_readline_v8_util.js');

const questions = [
   "What is your name?",
   "How old are you?",
   "How are you"
 ]

 const answerEmitter = collectAnswer(questions, (answers) => {
   console.log('thank you for answer')
   console.log(answers)
   process.exit()
 })

 answerEmitter.on("answer", (answer) => {
   console.log(`answer`, answer)
 })

// let count = 0;

// const inc = () => ++count;
// const dec = () => --count;
// const getCount = () => count;

// module.exports = {
//    name: 'Alex',
//    inc,
//    dec,
//    getCount
// }