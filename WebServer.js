const http = require("http");
const fileSystem = require("fs");

const PORT = 3000;

const htmlFile = fileSystem.readFileSync("./Templates/index.html","utf-8");
const products = fileSystem.readFileSync("./Data/data.json","utf-8");

const server = http.createServer((request, response)=>
{
  const path = request.url;
  if(path === '/' || path.toLowerCase() === '/home')
  {
    response.writeHead(200, {
      "content-type": "text/html",
      "content-encoding": "utf-8",
    });
    response.end(htmlFile.replace("{{%CONTENT%}}", "You are in Home Page"));
  }
  else if(path.toLowerCase() === '/about')
  {
    response.writeHead(200, {
      "content-type": "text/html",
      "content-encoding": "utf-8",
    });
    response.end(htmlFile.replace("{{%CONTENT%}}", "You are in About Page"));
  }
  else if(path.toLowerCase() === '/contact')
  {
    response.writeHead(200, {
      "content-type": "text/html",
      "content-encoding": "utf-8",
    });
    response.end(htmlFile.replace("{{%CONTENT%}}", "You are in Contact Page"));
  }
  else if(path.toLowerCase() === "/product")
  {
    response.writeHead(200, {
      "content-type": "javascript-object",
      "content-encoding": "utf-8",
    });
    response.end("You are in products page");
    console.log(JSON.parse(products));
  }
  else 
  {
    response.writeHead(404, {
      "Content-type": "text/html",
      message: "Resource Not Found",
    });
    response.end(htmlFile.replace("{{%CONTENT%}}", "Error 404 Page"));
  }
}
)
server.listen(PORT,()=>{console.log(`The Server has started in localhost:${PORT}`)});