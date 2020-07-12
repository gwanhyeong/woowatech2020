const EventBus = require('./EventBus');
const MenuList = require('./MenuList');
const OrderContainer = require('./OrderContainer');
const Dashboard = require('./Dashboard');
const Cashier = require('./Cashier');
const Barista = require('./Barista');
const Manager = require('./Manager');

class Cafe {
  constructor() {
    this.eventBus = new EventBus();
    this.menuList = new MenuList()
                .add('아메리카노', 3)
                .add('카페라떼', 5)
                .add('프라프치노', 10);

    this.orderContainer = new OrderContainer(this.eventBus, this.menuList);
    this.baristas = [ new Barista(this.eventBus, this.menuList,'찰리', 2), new Barista(this.eventBus, this.menuList, '라이언', 2) ];
    this.cashier = new Cashier(this.eventBus, this.menuList);
    this.manager = new Manager(this.eventBus, this.orderContainer, this.baristas);
    this.dashboard = new Dashboard(this.eventBus, this.orderContainer);
  }

  showMenu() {
    const menuTextArray = this.menuList.toTextArray();
    console.log(`[!] 메뉴  =  ${menuTextArray.join('  ')}`);
    console.log('========================');
  }

  open() {
    this.showMenu();
    this.manager.work();
    this.cashier.receiveOrder();
  }
}

module.exports = Cafe;