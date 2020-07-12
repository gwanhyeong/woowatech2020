const { DrinkStatus } = require('./Drink');

class Barista {
  constructor(eventBus, menuList, name, maxJobCount) {
    this.eventBus = eventBus;
    this.menuList = menuList;
    this.jobCount = 0;
    this.name = name;
    this.maxJobCount = maxJobCount;
    
    eventBus.onMake((drink) => {
      if (this.isMakeable() && drink.status === DrinkStatus.PENDING)
        this.make(drink);
    });
  }

  isMakeable() {
    return this.jobCount < this.maxJobCount;
  }

  make(drink) {
    this.jobCount++;
    const menuInfo = this.menuList.getMenuById(drink.menuId);

    //console.log(`${this.name} - ${menuInfo.name} 시작.`);
    drink.updateStatus(DrinkStatus.PROCESSING);

    setTimeout(() => {
      // console.log(`${this.name} - ${menuInfo.name} 완성.`);
      drink.updateStatus(DrinkStatus.COMPLETED);
      this.eventBus.emitDone(drink);
      this.jobCount--;
    }, 1000 * menuInfo.requiredTime);
  }
}

module.exports = Barista;