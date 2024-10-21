const http = require("node:http")
const fileSystem = require("node:fs")

const server = http.createServer();


server.listen(3000,()=>{console.log("Server started running in localhost:3000")});

// without stream
// server.on("request", (req, res) => {
//   fileSystem.readFile("./Files/large-file.txt","utf-8",(error,data)=>{
//     if(!error)
//       res.end(data);
//     else
//     {
//       res.end("Something went wrong");
//       return;
//     }

//   })
// });

//using stream
// server.on("request",(req, res)=>{
  
//   const readableStream = fileSystem.createReadStream("./Files/large-file.txt");

//   readableStream.on("data",(chunk)=>{
//     res.write(chunk);
//   })

//   readableStream.on("error",(error)=>{
//     res.end(error.message);
//   })

//   readableStream.on("end",()=>{
//     res.end();
//   })
// })

// To avoid back Pressure, I am using the pipe()
server.on("request",(req,res)=>{
  const readableStream = fileSystem.createReadStream("./Files/large-file.txt");
  readableStream.pipe(res);

})