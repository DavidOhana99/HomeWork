const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})