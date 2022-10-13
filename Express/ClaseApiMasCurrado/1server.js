const http = require("http");

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Answer from server!");
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});