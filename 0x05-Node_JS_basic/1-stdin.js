const readline = require('readline');

const inputIterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

inputIterface.question('Welcome to Holberton School, what is your name?', (answer) => {
  console.log(answer);
  inputIterface.close();
});
