var fs = require("fs");
var stream;
stream = fs.createWriteStream("./data2.txt");
 
stream.write("Esto es un tutorial sobre Node.js")
stream.write("Introduction")
stream.write("Streams")
stream.write("HTTPS")
stream.write("Sockets")
stream.write("Uso de plantillas")