// Anti Pattern
// Anti pattern define a bad solution as well as they negatively impact your application

const { readFileSync } = require("fs")

// 1. Modifying the prototype on an instance

    // we need to avoid that, because changing it can create havoc in application
    person.__proto__.address = {}

// 2. Syncing execution after initialization

    const listen = () => {
        readFileSync() // we should use Promise in case of async code, otherwise it will make our application slow
    }

    // e.g. Very populer `syncing issue` is ```callback hell```