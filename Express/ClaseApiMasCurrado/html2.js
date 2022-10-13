const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8080;

const html = (`<html><body><h1>This is HTML</h1></body></html>`);

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + "/index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});