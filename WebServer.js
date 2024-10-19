const http = require("http");
const fileSystem = require("fs");

const PORT = 3000;

const htmlFile = fileSystem.readFileSync("./Templates/index.html","utf-8");
const server = http.createServer((request, response)=>
{
  const path = request.url;
  if(path === '/' || path.toLowerCase() === '/home')
  {
    response.end(htmlFile.replace("{{%CONTENT%}}", "You are in Home Page"));
  }
  else if(path.toLowerCase() === '/about')
  {
    response.end(htmlFile.replace("{{%CONTENT%}}", "You are in About Page"));
  }
  else if(path.toLowerCase() === '/contact')
  {
    response.end(htmlFile.replace("{{%CONTENT%}}", "You are in Contact Page"));
  }
  else 
  {
    response.end(htmlFile.replace("{{%CONTENT%}}", "Error 404 Page"));
  }
}
)
server.listen(PORT,()=>{console.log(`The Server has started in localhost:${PORT}`)});