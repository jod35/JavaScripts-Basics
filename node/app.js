const http =require("http");
debugger;
const server=http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'text/plain'});
   res.end("Hello Jojo");
debugger;``
});

server.listen(3000,'127.0.0.1',()=>{
 console.log("Server running on port 3000");
 
});