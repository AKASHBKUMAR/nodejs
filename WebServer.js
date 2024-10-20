const http = require("http");
const fileSystem = require("fs");
const url = require("url");

const PORT = 3000;

const indexHtml = fileSystem.readFileSync("./Templates/index.html","utf-8");

const products = JSON.parse(fileSystem.readFileSync("./Data/data.json","utf-8"));

const productListHtml = fileSystem.readFileSync("./Templates/Product-list.html","utf-8");

const productListHtmlArray = products.map((product)=>{
  let output = productListHtml.replace("{{%IMAGE%}}", product.productImage);
  output = output.replace("{{%NAME%}}", product.name);
  output = output.replace("{{%MODELNAME%}}",product.modelName);
  output = output.replace("{{%MODELNO%}}", product.modelNumber);
  output = output.replace("{{%SIZE%}}", product.size);
  output = output.replace("{{%CAMERA%}}", product.camera);
  output = output.replace("{{%PRICE%}}", product.price);
  output = output.replace("{{%COLOR%}}", product.color);
  return output;
})



const server = http.createServer((request, response)=>
{
  const {query,pathname:path} = url.parse(request.url,true);
  if(path === '/' || path.toLowerCase() === '/home')
  {
    response.writeHead(200, {
      "content-type": "text/html",
      "content-encoding": "utf-8",
    });
    response.end(indexHtml.replace("{{%CONTENT%}}", "You are in Home Page"));
  }
  else if(path.toLowerCase() === '/about')
  {
    response.writeHead(200, {
      "content-type": "text/html",
      "content-encoding": "utf-8",
    });
    response.end(indexHtml.replace("{{%CONTENT%}}", "You are in About Page"));
  }
  else if(path.toLowerCase() === '/contact')
  {
    response.writeHead(200, {
      "content-type": "text/html",
      "content-encoding": "utf-8",
    });
    response.end(indexHtml.replace("{{%CONTENT%}}", "You are in Contact Page"));
  }
  else if(path.toLowerCase() === "/product")
  {
    
    response.writeHead(200, 
    {
      "Content-Type": "text/html"
    });
    response.end(indexHtml.replace("{{%CONTENT%}}",productListHtmlArray.join(",")));
    
  }
  else 
  {
    response.writeHead(404, {
      "Content-type": "text/html",
      "message": "Resource Not Found",
    });
    response.end(indexHtml.replace("{{%CONTENT%}}", "Error 404 Page"));
  }
}
)
server.listen(PORT,()=>{console.log(`The Server has started in localhost:${PORT}`)});