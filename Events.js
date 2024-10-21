//NODE MODULES
const http = require("http");
const events = require("events");


const myEmitter = new events.EventEmitter();


myEmitter.on("userCreated",(id, name)=>{
  console.log(`A New User Created with ${id} and ${name}`);
})

myEmitter.on("userCreated",(id,name)=>{
  console.log(`Validating the data ${id} and ${name}`)
});

myEmitter.on("userCreated", (id,name) => {
  console.log(`Adding it to the Database ID:${id} Name:${name}`);
});

myEmitter.emit("userCreated","1","Java");

