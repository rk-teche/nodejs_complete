let fs = require('fs');

data = fs.readdir('/Rahul', (err, data)=> {
    err && console.log('err', err)
    console.log('data =>', data) //log mac os files
})

exports.myText = 'hello from text'
