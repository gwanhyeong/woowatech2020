const { clearScreen } = require('./Util');

class Dashboard {
  constructor(eventBus, orderContainer) {
    this.orderContainer = orderContainer;
    eventBus.onOrder(() => this.showOrder());
    eventBus.onMake(() => this.showOrder());
    eventBus.onDone(() => this.showOrder());
  }

  showOrder() {
    clearScreen();
    console.log('\n======== 현황판 ========\n');

    const menuList = this.orderContainer.getConnectedMenuList();
    this.orderContainer.getNotCompletedOrders().forEach((order) => {
      console.log(`# 주문 ${order.id}`);

      order.drinks.forEach((drink) => {
        const item = menuList.getMenuById(drink.menuId);
        console.log(` - ${item.name} (${drink.getStatusToText()})`);
      });

      console.log('');
    })

    console.log('========================');
    console.log('[!] 주문할 음료를 입력하세요. 예) 아메리카노 2개 => 1:2');
  }
}

module.exports = Dashboard;