var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response){

  response.end("It is a nice day " + request.url);

}

function handleRequest2(request, response){

  response.end("It is a terrible weather " + request.url);

}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function(){
  console.log("Server listening to http "+ PORT1);
})

server2.listen(PORT2, function(){
  console.log("Server listening to http "+ PORT2);
})
