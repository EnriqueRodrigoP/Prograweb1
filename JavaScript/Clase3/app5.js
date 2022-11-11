var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.once('data_received',() => {
console.log('Data received succesfully.');
});
eventEmitter.emit('data_received');
eventEmitter.emit('data_received');
//Sólo se mostrará el primero