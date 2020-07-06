const { Order, OrderStatus } = require('./Order');

class OrderContainer {
  constructor(eventBus, menuList) {
    eventBus.onOrder((order) => this.addOrder(order));
    this.orders = [];
    this.menuList = menuList;
  }

  addOrder(order) {
    this.orders.push(order);
  }

  findOrderById(orderId) {
    return this.orders.find((order) => order.id === orderId);
  }

  getConnectedMenuList() {
    return this.menuList;
  }

  getAllOrders() {
    return this.orders;
  }

  getNotCompletedOrders() {
    return this.orders.filter((order) => order.status !== OrderStatus.COMPLETED);
  }
}

module.exports = OrderContainer;