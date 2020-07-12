const { OrderStatus } = require('./Order');
const { DrinkStatus } = require('./Drink');

class Manager {
  constructor(eventBus, orderContainer, baristas) {
    this.eventBus = eventBus;
    this.orderContainer = orderContainer;
    this.baristas = baristas;
    eventBus.onDone((drink) => {
      const order = orderContainer.findOrderById(drink.orderId);
      if (!order) {
        throw new Error('주문 정보를 찾을 수 없습니다.');
      }

      for (const drink of order.drinks) {
        if (drink.status !== DrinkStatus.COMPLETED) return;
      }

      order.updateStatus(OrderStatus.COMPLETED);
    });
  }

  checkOrder() {
    const orders = this.orderContainer.getNotCompletedOrders();
    const menuList = this.orderContainer.getConnectedMenuList();

    for (const order of orders) {
      order.drinks
        .filter((drink) => drink.status === DrinkStatus.PENDING)
        .forEach((drink) => {
          this.eventBus.emitMake(drink);
        });
    }
  }

  work() {
    setInterval(() => {
      this.checkOrder();
    }, 1000);
  }
}

module.exports = Manager;
