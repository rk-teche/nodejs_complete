let fs = require('fs');
let data = `{
    "name": "practice 1"
}`

let data1 = {
    name: "practice 2"
}

let _data2 = JSON.stringify(data1)

fs.writeFile('./assets/json/data.json', _data2, (err, data) => {
    err && console.log('err', err)
    data && console.log('data', data)
})
