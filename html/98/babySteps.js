const result = 0

for (const i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)