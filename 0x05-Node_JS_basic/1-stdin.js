const readline = require('readline');

const inputIterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?')

inputIterface.on('line', (answer) => {
  console.log('Your name is: ' + answer);
  inputIterface.close();
});
