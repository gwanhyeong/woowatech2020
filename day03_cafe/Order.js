const { Drink } = require('./Drink');

const OrderStatus = {
  PENDING: Symbol("orderStatusPending"),
  COMPLETED: Symbol("orderStatusCompleted"),
};

class Order {
  constructor(menuId, quantity) {
    this.id = Order.autoIncrementId++;
    this.drinks = Array(quantity).fill().map( () => new Drink(this.id, menuId) );
    this.status = OrderStatus.PENDING;
  }

  getStatusToText() {
    switch (this.status) {
      case OrderStatus.PENDING:
        return "대기중";
      case OrderStatus.COMPLETED:
        return "완성";
    }
  }

  updateStatus(status) {
    if (status !== OrderStatus.PENDING && status !== OrderStatus.COMPLETED)
      return false;

    this.status = status;
    return true;
  }
}

Order.autoIncrementId = 1;
module.exports = { Order, OrderStatus };