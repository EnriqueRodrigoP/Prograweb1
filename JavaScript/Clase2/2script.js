process.on('exit',function(codigo) {
    console.log('saliendo del proceso',codigo);
})

console.log('id del proceso:',process.pid);