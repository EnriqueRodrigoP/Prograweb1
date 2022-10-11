var http=require("http");
var server = http.createServer(function (peticion, respuesta){
    console.log(peticion);
    respuesta.end("Tremendo servidor acabas de levantar");
});

server.listen(3000, function(){
    console.log("tu servidor esta listo en " + this.address().port);
});
    