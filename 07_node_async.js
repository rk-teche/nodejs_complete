const interVal = 5000;
const waitInterval = 500;
let currentTime = 0;

console.log(`time delay would be ${interVal/1000} second(s)`)


const intervalCallback = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/interVal)*100)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p}%`);
    // console.log(`interval time would be ${currentTime/1000} seconds`)
}

const currentInterval = setInterval(intervalCallback, waitInterval)

const timer = () => {
    clearInterval(currentInterval)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(`it will invoked after ${interVal} milliseconds`)
}


setTimeout(timer, interVal)
