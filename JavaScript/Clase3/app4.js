var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('data_received',() => {
console.log('Data received succesfully.');
});
eventEmitter.emit('data_received');