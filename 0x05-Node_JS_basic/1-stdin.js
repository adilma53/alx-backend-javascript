process.stdout.write('Welcome to Holberton School, what is your name?\n');

const inputInterface = process.stdin;
if (inputInterface.isTTY) {
  inputInterface.on('data', (userInput) => {
    process.stdout.write(`Your name is: ${userInput.toString()}`);
    inputInterface.pause();
  });
} else {
  inputInterface.on('data', (userInput) => {
    process.stdout.write(`Your name is: ${userInput.toString()}`);
    inputInterface.pause();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
