class Conductor {

    run(command) {
        console.log(`Executing command: ${command.name}`);
        command.execute();
    }

}

module.exports = new Conductor();

/**
 * Power of command pattern by improving the conductor
 * 
 * Since all the commands are run through conductor, we can do bunch of command to do the things
 * 1. We can cue up commands
 * 2. make history of all commands that we have run
 */

 class Conductor {

    constructor(){
        this.history = []
        this.undone = []
    }

    run(command) {
        console.log(`Executing command: ${command.name}`);
        command.execute();
        this.history.push(command)
    }

    printHistory(){
        this.history.forEach(command => console.log(`[Log] ${command.name}`))
    }

    undo(){
        let command = this.history.pop()
        command.undo()
        this.undone.push(command)
        console.log(`[Revert Command] ${command.name}`)
    }

    redo(){
        let command = this.undone.pop()
        this.run(command)

    }

}

module.exports = new Conductor();