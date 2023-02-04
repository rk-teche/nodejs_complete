
 /**
  * Note - just my using require, we are running whole `require file` inside this file, We don't need to export the file 
  * but we want to use some methods, properties etc of that file then we need to export those items
  * 
  */
  const fileSystem = require('./01_file_system')

console.log('myModule', fileSystem)
console.log('text ==>', fileSystem.myText)

const os = require('os')

console.log("os start ===>", os, "os end --------  \n");
console.log(os.platform(), "os end --------  \n");
console.log(os.homedir(), "os end --------  \n");