const http = require("http");
const fileSystem = require("fs");

const PORT = 3000;

const homePage = fileSystem.readFileSync("./Templates/index.html");
const server = http.createServer((request, response)=>
  {
    response.end(homePage);
    console.log("A New Request is Received");
  }
)
server.listen(PORT,()=>{console.log(`The Server has started in localhost:${PORT}`)});