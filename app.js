const readLine = require("readline");

const inputStream = readLine.createInterface(
{
  input: process.stdin,
  output: process.stdout,
});
inputStream.question("Enter your Name and Age: ", (name, age) => 
{
  console.log();
});

