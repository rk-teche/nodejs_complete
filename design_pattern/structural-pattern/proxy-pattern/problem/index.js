var fs = require('fs');
var path = require('path');

var txtFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, 'Readme.md');

var result = (error, contents) => {

    if (error) {
        console.log('\x07');
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);

}

fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);

/**
 * Ex - One book their appointment with secretary of CEO, so here secretary is working as `Proxy` pf CEO
 * Proxy pattern bascially provides surrogate or placeholder for another object to control access to it
 * Proxy can use to manage - remote resource, provide data validation, provide security, cache data, event log actions etc
 * Proxy provides same interface as the subject - The client can call the same method to the proxy as they would call on the original object.
 */