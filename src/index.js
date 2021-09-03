import StringConverter from './StringConverter.js'

import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const stringConverter = new StringConverter()

rl.question('What\'s your name?\n', (answer) => {
  console.log(`Welcome ${answer}!`)
  stringConverter.setName(answer)
  console.log(`Your name in hexadecimal notation is: ${stringConverter.getHex()}`)
  rl.close()
})