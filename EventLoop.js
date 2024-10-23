const fileSystem = require("node:fs");

console.log("Program has started");



fileSystem.readFile("./Files/AsynchronousWrite.txt","utf-8",(error,data)=>{
  console.log(data);

  setTimeout(() => {
    console.log("Timer Call Back Function Executed");
  }, 0);

  setImmediate(() => {
    console.log("Set Immediate Call back function execution");
  });

  process.nextTick(()=>{console.log("Process NextTick is executed")});
})



console.log("Program has Completed");