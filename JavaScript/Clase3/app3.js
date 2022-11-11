
var fs = require("fs");
var readStream = fs.createReadStream("./datainput.txt");
var writeStream = fs.createWriteStream("./dataoutput.txt");
readStream.pipe(writeStream);