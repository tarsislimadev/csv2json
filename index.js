#!/usr/bin/env node

const fs = require('fs')

const csv2json = (input, output) => {
  const csv_string = fs.readFileSync(input).toString()

  const header = csv_string.split('\r\n').at(0).split(',')

  const lines = csv_string.split('\r\n').slice(1).map(raw => {
    const line = {}

    raw.split(',').map((value, index) => {
      line[header[index]] = value
    })

    return line
  })

  fs.writeFileSync(output, JSON.stringify(lines, null, 4))

  console.log(`saved into ${output}`)
}

csv2json(
  process.argv.at(2),
  process.argv.at(3) || './file.json',
)
