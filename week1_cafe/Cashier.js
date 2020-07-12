const readline = require('readline');
const { Order } = require('./Order');

class Cashier {
  constructor(eventBus, menuList) {
    this.eventBus = eventBus;
    this.menuList = menuList;
  }

  receiveOrder() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('[!] 주문할 음료를 입력하세요. 예) 아메리카노 2개 => 1:2\n', (input) => {
      const splited = input.split(':');
      if (splited.length < 2) {
        console.log('[!] 주문을 제대로 입력해주세요.');
        rl.close();
        this.receiveOrder();
        return;
      }

      const menuId = Number(splited[0]);
      const quantity = Number(splited[1]);
      if (!this.menuList.getMenuById(menuId)) {
        console.log('[!] 존재하지 않는 메뉴ID 입니다.');
        rl.close();
        this.receiveOrder();
        return;
      }

      this.eventBus.emitOrder( new Order(menuId, quantity) );
      rl.close();
      this.receiveOrder();
    });
  }
}

module.exports = Cashier;