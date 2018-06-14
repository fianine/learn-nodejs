const http = require('http');

const server = http.createServer((req,res) => {
  res.writeHead(200,'Server Created');
  res.end('Ok');
});

server.listen(3000,()=>{
  console.log('Listening port on 3000');
})
