var events = require('events');
//creamos un emisor de eventos
var eventEmitter = events.EventEmitter;
//Ahora un nuevo emisor de eventos
var emitter = new eventEmitter();

emitter.on('data_received',() => {});
emitter.on('data_received',() => {});
emitter.on('data_received',() => {});
emitter.on('data_received',() => {});

console.log(eventEmitter.listenerCount(emitter, 'data_received'));