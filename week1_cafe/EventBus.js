const EventEmitter = require('events');

class EventBus {
  constructor() {
    this.emitter = new EventEmitter();
  }

  onOrder(callback) {
    this.emitter.on('order', callback);
  }

  onMake(callback) {
    this.emitter.on('make', callback);
  }

  onDone(callback) {
    this.emitter.on('done', callback);
  }

  emitOrder(order) {
    this.emitter.emit('order', order);
  }

  emitMake(drink) {
    this.emitter.emit('make', drink);
  }

  emitDone(drink) {
    this.emitter.emit('done', drink);
  }
}

module.exports = EventBus;