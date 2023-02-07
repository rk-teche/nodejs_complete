class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}

/**
 * Now fix this issue :    
 */
 class Singleton {
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = new Logger()
        }
    }

    getInstance(){
        return Singleton.instance
    }

}


module.exports = Singleton;

/**
 * Easier and more typicall solution for NodeJS - simply to export the instance from the module
 */

 module.exports = new Logger();
 // This file will run once and create new instance of model and save it in `cache`.
 // NodeJS automatically handle exporting the same instance of the logger to every module that wants to consume it
 // after implementing this we can remove `Singleton class` code

