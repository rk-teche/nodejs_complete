let fs = require('fs')

let data = require('./assets/json/demo_json_1.json');
console.log('direct access =>', data) // complete JSON object
console.log('direct access =>', data.name)

fs.readFile('./assets/json/demo_json_1.json', 'utf-8',(err, data) => {
    err && console.log('err ==>', err)
    let _data = JSON.parse(data)
    console.log('data ==>', data) // it returns an string
    console.log('_data ==>', _data.name) // it returns an object
})