const http = require("http");

const {addnumber,sub,multiply,dividenum} = require('./local')


// const myServer = http.createServer((req, res)=> {
//     res.write("vijaya lakshmi Reddy")
//     res.end()
// })

// myServer.listen(8080)


console.log(addnumber(10,323))
console.log(sub(10,323))
console.log(multiply(10,323))
console.log(dividenum(10,323))