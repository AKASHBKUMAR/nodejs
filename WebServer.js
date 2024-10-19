const http = require("http");
const fileSystem = require("fs");

const PORT = 3000;

const homePage = fileSystem.readFileSync("./Templates/index.html");
const server = http.createServer((request, response)=>
{
  const path = request.url;
  if(path === '/' || path.toLowerCase() === '/home')
  {
    response.end("You are in Home Page");
  }
  else if(path.toLowerCase() === '/about')
  {
    response.end("You are in About Page");
  }
  else if(path.toLowerCase() === '/contact')
  {
    response.end("You are in Contact page");
  }
}
)
server.listen(PORT,()=>{console.log(`The Server has started in localhost:${PORT}`)});