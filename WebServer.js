const http = require("http");
const fileSystem = require("fs");
const url = require("url");

const PORT = 3000;

const indexHtml = fileSystem.readFileSync("./Templates/index.html","utf-8");

const products = JSON.parse(fileSystem.readFileSync("./Data/data.json","utf-8"));

const productListHtml = fileSystem.readFileSync("./Templates/Product-list.html","utf-8");

const productDetailsHtml = fileSystem.readFileSync("./Templates/Product-Details.html","utf-8");


const replaceHtml = (template, product) =>{
  let output = template
    .replace("{{%IMAGE%}}", product.productImage)
    .replace("{{%NAME%}}", product.name)
    .replace("{{%MODELNAME%}}", product.modelName)
    .replace("{{%MODELNO%}}", product.modelNumber)
    .replace("{{%SIZE%}}", product.size)
    .replace("{{%CAMERA%}}", product.camera)
    .replace("{{%PRICE%}}", product.price)
    .replace("{{%COLOR%}}", product.color)
    .replace("{{%ID%}}", product.id)
    .replace("{{%ROM%}}", product.ROM)
    .replace("{{%DESC%}}", product.Description);

  return output;
}


const server = http.createServer((request, response)=>
{
  const {query,pathname:path} = url.parse(request.url,true);
  console.log(query);
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
  else if(path.toLowerCase() === "/products")
  {
    if(!query.id)
    {
      const productListHtmlArray = products.map((prod)=>{return replaceHtml(productListHtml,prod);})
      response.writeHead(300, {
        "Content-Type": "text/html"
      });
      response.end(indexHtml.replace("{{%CONTENT%}}",productListHtmlArray.join(",")));
    }
    else
    {
      const productDeatilHtml = replaceHtml(productDetailsHtml,products[query.id]);
      //response.writeHead(300, {
      //  "Content-Type": "text/html",
      //});
      response.end(indexHtml.replace("{{%CONTENT%}}", productDeatilHtml));
    }
    
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