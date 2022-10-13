const http = require("http");

const host = 'localhost';
const port = 8080;

const csv = (`id, name, pass\n1, David, dperez@email.com`);

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=users.csv");
    res.writeHead(200);
    res.end(csv);
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});