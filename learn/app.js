var http=require('http');
debugger;
var server=http.createServer(
    function(req,res){
      
         res.writeHead(200,{'content-Type':'text/plain'});
         debugger;
         res.end("Hello world!!");
        }
);

server.listen(5000,
    function(){
        console.log("Server running on port 5000");
    }
    );

